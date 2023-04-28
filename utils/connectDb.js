import mongoose from "mongoose";

const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    console.log("Using Existing Connection");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_SRV, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db connected");
    connection.isConnected = db.connections[0].readyState;
  } catch (e) {
    console.log("failed connection");
  }
}

export default connectDb;
