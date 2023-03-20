import mongoose from 'mongoose'
import database from '@/utils/config'
import musicSchema from '@/models/musicSchema'

const Search = async(req,res)=>{
const {query} = await req.body;
console.log(query)
await database.connect();
try {
    
const first_result = await musicSchema.find({$text:{$search:query}});
if(!first_result){
const second_result = await musicSchema.find({$text:{$search:query}});
if(!second_result){
const third_result = await musicSchema.find({$text:{$search:query}});
res.status(200).json(third_result)
return
}
res.status(200).json(second_result) 
return
}
//await database.disconnect();
res.status(200).json(first_result)   
} catch (error) {
    res.status(404).json({error})
}
   
}

export default Search