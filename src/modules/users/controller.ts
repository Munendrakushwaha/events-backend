import { type Response, type Request } from "express";
import { Service } from ".";
import { type ILogin, type IUser } from "./entities";
export default class Controller {
  static login = async (req: Request, res: Response): Promise<any> => {
    try {
      const loginData: ILogin = req.body;
      const isAuthenticated: any = await Service.login(loginData);

      if (isAuthenticated) {
        const token: string = Service.generateToken(loginData);
        return res
          .status(200)
          .json({ message: "Login Successful", tokenIs: token });
      }
      return res.status(401).json({ message: "Invalid credentials" });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  static register = async (req: Request, res: Response): Promise<any> => {
    try {
      const registerData: IUser = req.body;
      const response: any = await Service.register(registerData);
      if (response.message)
        return res.status(409).json({ message: "User already exist" });
      return res.status(200).json({ message: "Registered Successfully" });
    } catch (error) {
      return res.status(500).json({ "Error Occured": error });
    }
  };
}
