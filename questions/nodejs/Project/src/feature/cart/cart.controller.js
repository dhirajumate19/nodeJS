import { cartModel } from "./cart.model.js";
//case1 : load payload
//case2: create new cart in model
//case3 : with that model save payload in db

//case4 : send response
export const createCart = async (req, res) => {
  try {
    const { userId, products } = req.body;
    const newCart = new cartModel({ userId, products });
    const response = await newCart.save();
    res.status(201).send({ CartData: response, message: " Your Cart Ready" });
  } catch (error) {
    res.status(500).send("something went wrong! " + error);
  }
};
