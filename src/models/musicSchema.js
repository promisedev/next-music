
import { Title } from '@mui/icons-material'
import mongoose from 'mongoose'


const Musicschema = new mongoose.Schema({
   artwork_url:{type:String, required:true},
   music_url:{type:String, required:true},
   title:{type:String, required:true},
   duration:{type:String, required:true},
   genre:{type:String, required:true},
   author:{type:String, required:true},
   likes:{type:Number, default:0},
   plays:{type:Number, default:0},
   postedAt:{type:String, required:true},
   isliked:{type:Boolean, default:false},
   type:{type:String, required:true},

},{timestamps:true})

export default mongoose.models.Music || mongoose.model("Music", Musicschema)