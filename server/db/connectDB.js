import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		//console.log("mongo_uri: ", process.env.MONGODB_URI);
		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connection to MongoDB: ", error.message);
		process.exit(1);
	}
};