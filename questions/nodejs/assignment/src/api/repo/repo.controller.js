import axios from "axios";
import { failedResponse, successReponse } from "../utils/response/reponse.js";
import { reposModel } from "./repo.model.js";

export const getRepo = async (req, res) => {
  try {
    //load params
    const username = req.params.username;

    // find username macthes with params with projection username and data
    const alreadyUser = await reposModel.aggregate([
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
    if (alreadyUser.length > 0) {
      return res
        .status(200)
        .send(successReponse(alreadyUser, "Already user data in DB"));
    } else {
      const fetchReq = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );

      //check username length if gte 0 then return exsting data
      //  else fetch github repo and stored
      // then check  fetch data equal to 200 status
      // macthes to 200 return with data not foound
      // else store data into model and save into db
      // return new record with username and Data

      if (fetchReq.status !== 200) {
        return res.status(400).send(failedResponse(400, "Data Not found"));
      } else {
        const newData = new reposModel({
          username: username,
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
    console.log(error);
    res.status(500).send(failedResponse(500, "Internal Server Error"));
  }
};
