import { NextApiRequest, NextApiResponse } from "next";
// import { sampleUserData } from '../../../utils/sample-data'

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray([])) {
      throw new Error("Cannot find user data");
    }
    const sampleUserData: any = [];
    res.status(200).json(sampleUserData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
