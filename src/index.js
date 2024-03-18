import dotenv from 'dotenv'
import connectDB from  './db/index.js';

dotenv.config(
    { path: './.env' }
    );

connectDB()

// import express from 'express'
// import mongoose from 'mongoose'
// const app = express();
// import { DB_NAME } from './constants';
// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on( "error", (error)=>{
//         console.log("ERR",error);
//         throw error
//         });
        
//         const port = process.env.PORT;
//         app.listen(process.env.PORT || 3000,()=>{
//             console.log(`App is listening at port ${port}`)
//         })
//         } catch(error) {
//         console.error("ERROR ",error)
//         throw error
//         }
// })()