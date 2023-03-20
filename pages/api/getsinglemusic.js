import musicSchema from "@/models/musicSchema";
import database from "@/utils/config";

const Request = async (req, res) => {
  const { id } = req.body;
  try {
    await database.connect();

    const data = await musicSchema.findOne({ id: id }).exec();
    //await database.disconnect();
    if (!data) return res.status(400).json({ msg: "no data found" });
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export default Request;
