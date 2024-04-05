import mongoose from "mongoose";

// MongoDB connection URL

const connectToDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB: ",conn.host);
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
    }
};

export default connectToDatabase;
