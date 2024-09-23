import { addressModel } from "../models/addressModel.js";

export const addData = async (req, res) => {
  try {
    const body = req.body;
    const data = await addressModel(body);
    await data.save();

    res.status(200).json({
      message: "data added successfully...✅",
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Something went wrong...🤦‍♂️",
      success: false,
      error: true,
    });
  }
};

export const fetchData = async (req, res) => {
  try {
    const data = await addressModel.find().sort({createdAt:-1});
    res.status(200).json({
      message: "data fetched successfully...✅",
      data: data,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong...🤦‍♂️",
      success: false,
      error: true,
    });
  }
};
