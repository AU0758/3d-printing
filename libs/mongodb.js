import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connection to Database: %cOK", "color: green")
    } catch (error) {
        console.log("Connection to Database: %cFAILED", "color: red")
        console.log(error)
    }
};

export default connectMongoDB;