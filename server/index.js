import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import peopleRoute from "./routes/peopleRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(() =>{

    console.log("DB connected successfully");

    app.listen(PORT, ()=>{
        console.log(`Server is running on ports: ${PORT}`);
    })

}).catch(error => console.log(error));

app.use("/api/users",userRoute);
app.use("/api/products", productRoute); 
app.use("/api/peoples",peopleRoute);