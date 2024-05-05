import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;
import { orderModel } from "./order.model.js";

//place order for user
export const createOrder = async (req, res) => {
  try {
    const { userId, products, totalPrice } = req.body;
    const newOrder = new orderModel({ userId, products, totalPrice });
    const response = await newOrder.save();
    res.status(201).send({ response, message: "Order Create" });
  } catch (error) {
    console.log(error);
  }
};
//get order detail
export const getOrder = async (req, res) => {
  try {
    const orderID = req.params.orderid;
    console.log("id", orderID);
    const response = await orderModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(orderID) },
      },
      {
        $lookup: {
          from: "users",
          as: "userDetails",
          localField: "userId",
          foreignField: "_id",
        },
      },
      {
        $project: {
          _id: 0,
          products: 1,
          totalPrice: 1,
          userDetails: { $first: "$userDetails" },
        },
      },
    ]);
    res.status(200).send({ response, message: "Record Fetch" });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong! " + error);
  }
};
