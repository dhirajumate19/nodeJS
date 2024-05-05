import { userModel } from "./user.model.js";

export const createUserController = async (req, res) => {
  try {
    const { username, email, password, fullName, address } = req.body;
    const user = new userModel({
      username,
      email,
      password,
      fullName,
      address,
    });
    const response = await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" + error });
  }
};
