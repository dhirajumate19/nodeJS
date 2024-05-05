import { productModel } from "./product.model.js";

export const addProducts = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const newProduct = new productModel({ name, price, description, category });
    const response = await newProduct.save();
    res.status(201).send({ response, message: "Product Addedd" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Error " + error });
  }
};
