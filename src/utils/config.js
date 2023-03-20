import mongoose from 'mongoose'


const connection = {};

const connect = async()=>{
console.log("...connecting");
   if(connection.isConnected){
    console.log("Already connected");
    return;
   } 

   if(mongoose.connections.length >0){
console.log("...connecting");
   connection.isConnected = mongoose.connections[0].readyState;
if(connection.isConnected === 1){
    console.log("Use previous connection");
    return;
}
await mongoose.disconnect();

   }

   const dB = await mongoose.connect(process.env.MONGODB_URI);
console.log("New connection");
connection.isConnected = dB.connections[0].readyState;

}

const disconnect = async()=>{
if (connection.isConnected){
    if(process.env.NODE_ENV === "production"){
        await mongoose.disconnect();
        connection.isConnected = false
    }else{
        console.log("Not disconnected");
    }
}

}


const convert = (item) => {
     item._id = item._id.toString();
     item.createdAt = item.createdAt.toString();
     item.updatedAt = item.updatedAt.toString();
     return item;}

const database = {connect,disconnect,convert}

export default database







