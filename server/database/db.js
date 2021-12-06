import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected:`);
  } catch (error) {
    console.log("MonogoDB connection error", error.message);
  }
};

export default ConnectDB;
