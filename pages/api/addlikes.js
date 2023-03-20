

import database from '@/utils/config'
import musicSchema from '@/models/musicSchema'


const Addlike = async(req,res)=>{
const {id} = await req.body
await database.connect();
const request = await musicSchema.findOne({_id:id}).exec()
if(!request) return res.status(403).json("failed to update");

const {likes,_id} = request;
let num = Number(likes) + 1

const response =  await musicSchema.findByIdAndUpdate(_id,{likes:num},{useFindAndModify:false})

//await database.disconnect()
res.status(201).json("Updated")

}

export default Addlike

