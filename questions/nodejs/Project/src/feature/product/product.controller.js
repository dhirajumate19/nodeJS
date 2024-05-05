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

export const getProductCategoryWise = async (req, res) => {
  try {
    const category = req.params.category;
    const response = await productModel.aggregate([
      { $match: { category: category } },
      {
        $sort: {
          totalPrice: 1,
        },
      },
      {
        $project: {
          _id: 0,
          name: "$name",
          price: "$price",
          description: "$description",
          category: "$category",
        },
      },
    ]);
    res.status(200).send({ Products: response, message: "Your product" });
  } catch (error) {
    console.log("error" + error);
    res.status(500).send("Something went wrong " + error);
  }
};
