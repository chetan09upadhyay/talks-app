import  express from  "express";
import cookieParser from "cookie-parser";
import  dotenv from  "dotenv";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
   

const app = express();
app.use(cookieParser());

//  app.use(express.json);
  app.use(express.json());

app.use("/api/auth", authRoutes); 
app.use("/api/messages", messageRoutes); 
app.use("/api/users", userRoutes); 

const PORT = process.env.PORT || 5000;

app.get("/",(req,res) =>{
    res.send("hello world11!");
})


app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`Server is runing on port  ${PORT}`);
})

 