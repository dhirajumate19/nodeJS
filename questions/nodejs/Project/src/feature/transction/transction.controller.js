import { transctionModel } from "./transction.model.js";
import mongoose from "mongoose";

export const createTransction = async (req, res) => {
  try {
    const { orderId, transactionId, amount, currency, paymentMethod, status } =
      req.body;
    const newTransction = new transctionModel({
      orderId,
      transactionId,
      amount,
      currency,
      paymentMethod,
      status,
    });
    const response = await newTransction.save();
    res
      .status(201)
      .send({ Transction: response, message: "Transction created" });
  } catch (error) {
    res.status(500).send("something went wrong " + error);
  }
};

export const getTransctionDeatils = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);
    const response = await transctionModel.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "order",
          as: "orderdeatil",
          localField: "orderId",
          foreignField: "_id",
        },
      },
      {
        $project: {
          _id: 0,
          amount: 1,
          currency: 1,
          paymentMethod: 1,
          status: 1,
          orderdeatil: { $first: "$orderdeatil" },
        },
      },
    ]);
    res
      .status(200)
      .send({ TransctionDeatil: response, message: "Transction Data" });
  } catch (error) {
    res.status(500).send("something went wrong! " + error);
  }
};
