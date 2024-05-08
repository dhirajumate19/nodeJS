import axios from "axios";
import { userModel } from "./user.model.js";
import { failedResponse, successReponse } from "../utils/response/reponse.js";

export const getUser = async (req, res) => {
  try {
    console.log("user", req.params.username);
    const username = req.params.username;
    const alreadyUser = await userModel.aggregate([
      {
        $match: { username: username },
      },
      {
        $project: {
          _id: 0,
          username: 1,
          data: 1,
        },
      },
    ]);
    // return alreadyUser.length>0 ? res
    //     .status(200)
    //     .send(successReponse(alreadyUser, "Already user data in DB")): const req=await axios.get(
    //             `https://api.github.com/users/${username}`
    //           );
    if (alreadyUser.length > 0) {
      return res
        .status(200)
        .send(successReponse(alreadyUser, "Already user data in DB"));
    } else {
      const fetchReq = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log("req", fetchReq);
      if (fetchReq.status !== 200) {
        return res.status(400).send(failedResponse(400, "Data Not found"));
      } else {
        const newData = new userModel({
          username,
          data: fetchReq.data,
        });
        const response = await newData.save();
        res
          .status(201)
          .send(
            successReponse(response, `Data Stored in DB with ${username} `)
          );
      }
    }
  } catch (error) {
    console.log("error", error);
    return res.status(400).send(failedResponse(500, "Internal Server Error"));
  }
};
