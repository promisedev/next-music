import User from '@/models/userSchema'
import database from '@/utils/config'
import bcrypt from 'bcrypt'

const Seed = async(req,res)=>{
const email= "developer.prophegos@gmail.com";
const password =  (await bcrypt.hash("prophegos12345",10)).toString();
const _admin = true;
    try {
// await database.connect()
// const result = await User.create({email,password,_admin});
// await database.disconnect();
// res.status(201).json({result})

        
    } catch (error) {
        res.status(400).json({error:error})
    }

}
export default Seed