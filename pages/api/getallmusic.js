import musicSchema from "@/models/musicSchema";
import database from "@/utils/config";

const Request = async (req, res) => {
  await database.connect();

  try {
    const data = await musicSchema.find();
    await database.disconnect();

    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export default Request;
