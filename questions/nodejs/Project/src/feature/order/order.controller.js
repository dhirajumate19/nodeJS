import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;
import { orderModel } from "./order.model.js";
import { cartModel } from "../cart/cart.model.js";

//place order for user
export const createOrder = async (req, res) => {
  try {
    const { userId, products, transctionId, refTransctionId } = req.body;

    if (!refTransctionId) {
      return res.status(400).send({
        message:
          "Issues with your reference trasnction! can't place your order at this momemt  ",
      });
    }
    const productIds = products.map((item) => item.productId);

    const responseId = orderModel.aggregate([
      {
        $match: {
          _id: { $in: productIds.map((id) => new mongoose.Types.ObjectId(id)) },
        },
      },
    ]);
    if (!responseId) {
      return res.status(400).send({
        message: "We can't place your order now as product is out of stock",
      });
    }
    //total price calculation
    const totalPrice = products.reduce(
      (acc, item) => acc + item.productPrice,
      0
    );

    const newOrder = new orderModel({
      userId,
      products,
      totalPrice,
      transctionId,
      refTransctionId,
    });
    const response = await newOrder.save();
    if (!response) {
      return res.send({
        message:
          "We can't place your order at this moment as we're facing few issues. Please try after some time.",
      });
    }
    //clear cart
    await cartModel.deleteOne({ userId });
    res.status(201).send({ response, message: "Order Create" });
  } catch (error) {
    console.log(error);
  }
};
//get order detail
export const getOrder = async (req, res) => {
  try {
    // const orderID = req.params.orderid;
    const orderId = new mongoose.Types.ObjectId(req.params.orderid);
    const response = await orderModel.aggregate([
      {
        $match: { _id: orderId },
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
        $lookup: {
          from: "transctions",
          as: "transctiondata",
          localField: "transctionId",
          foreignField: "_id",
        },
      },
      {
        $project: {
          _id: 0,
          products: 1,
          totalPrice: 1,
          userDetails: { $first: "$userDetails" },
          transctiondata: { $first: "$transctiondata" },
        },
      },
    ]);
    res.status(200).send({ response, message: "Record Fetch" });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong! " + error);
  }
};
