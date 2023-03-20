import musicSchema from "@/models/musicSchema";
import database from "@/utils/config";

const Request = async (req, res) => {
  const { id } = await req.body;
  try {
    await database.connect();

    const data = await musicSchema.findByIdAndDelete({ _id: id });
    const result = await musicSchema.find();
    //await database.disconnect();

    res.status(200).json({ msg: "music successfully deleted",result});
  } catch (error) {
    console.log(error);
  }
};

export default Request;
