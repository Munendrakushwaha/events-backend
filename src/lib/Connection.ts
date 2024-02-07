import mongoose from "mongoose";
import serverConfig from "../config";
class Connection {
  private readonly URI = serverConfig.mongoUrl;

  connectDb = async (): Promise<any> => {
    try {
      await mongoose.connect(this.URI);
      console.log("Connection successful");
    } catch (error) {
      console.error("Database Connection Failed");
    }
  };

  disconnectDb = async (): Promise<any> => {
    try {
      await mongoose.disconnect();
      console.log("Disconnected successfully");
    } catch (error) {
      console.log("Error in disconnect", error);
    }
  };
}

export default new Connection();
