import database from '@/utils/config'
import musicSchema from '@/models/musicSchema'

const Addplays = async (req, res) => {
  const { id } = await req.body;
  await database.connect();
  const request = await musicSchema.findOne({ _id: id }).exec();
  if (!request) return res.status(403).json("failed to update");

  const { plays, _id } = request;
  let num = Number(plays) + 1;

  const response = await musicSchema.findByIdAndUpdate(
    _id,
    { plays: num },
    { useFindAndModify: false }
  );

  //await database.disconnect();
  res.status(201).json("Updated");
};

export default Addplays;