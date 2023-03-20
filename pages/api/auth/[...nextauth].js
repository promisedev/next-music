import database from "../../../src/utils/config";
import NextAuth from "next-auth";
import Users from "../../../src/models/userSchema";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

export default NextAuth({
    session:{
        strategy:"jwt"
    },
    callbacks:{
async jwt({token,user}){
if(user?._id) token._id = user._id;
if(user?._isadmin) token._isadmin = user._isadmin;
return token
},
async session({session,token}){
if(token?._id) session._id = token._id;
if(token?._isadmin) session._isadmin = token._isadmin;
return session
}
    },
    providers:[
        CredentialsProvider({
async authorize(credentials){
const {email, password} = credentials;
await database.connect();
const user = await Users.findOne({email:email}).exec();

await database.disconnect();
//  CHECK IF USER EXIST
if(!user) return {error:'no user found'};
     
// CHECK IF PASSWORD IS CORRECT
const ispassword = await bcrypt.compare(password,user.password);
if(!ispassword){  return {error:"user password is incorrect"}}
else{

    return {
        _id:user._id,
        email:user.email,
        _isadmin:user._isadmin
    }
}



}
        })
    ]
})