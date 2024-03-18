import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
// DB is another continent

const connectDB = async () =>{
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         console.log(`\n Database connected !! DB HOST ${connectionInstance.connection.host}`);
         //   console.log(connectionInstance)
        }
    
    catch(error){
        console.error("MONGODB Connection Failed, (check the MONGODB DB Link first) ",error);
        process.exit(1);
    }
}
export default connectDB