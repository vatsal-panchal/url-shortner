import mongoose from "mongoose";
import config from "./config.js";

const connectDB =async () => {
    try {
        await mongoose.connect(config.MONGODB_URI)
        console.log("MONGODB connected successfully");
        
    } catch (error) {
        console.log(`MONGODB connection fail || ${error.message}`);
        
    }
}

export default connectDB