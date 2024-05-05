import { orderModel } from "./order.model.js";

export const createOrder = async (req, res) => {
  try {
    const { userID, products, totalPrice } = req.body;
    const newOrder = new orderModel({ userID, products, totalPrice });
    const response = await newOrder.save();
    res.status(201).send({ response, message: "Order Create" });
  } catch (error) {
    console.log(error);
  }
};
