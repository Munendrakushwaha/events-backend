import { type NextFunction, type Request, type Response } from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken";
import serverConfig from "../../../config";

class Authentication {
  // private readonly secretKey = "myNameIsMunendraKumarKushwaha";
  private readonly secretKey = serverConfig.jwtSecret;

  public authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
  ): Response<any, Record<string, any>> | undefined => {
    const token: any = req.header("authorization");

    if (!token) {
      next();
      return;
    }
    try {
      const decoded: string | jwt.JwtPayload = jwt.verify(
        token,
        this.secretKey
      );
      return res.status(200).json({
        message: "Login Successful",
        details: decoded,
        tokenIs: token,
      });
      next();
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        next();
        return;
      }
      return res.status(403).json({ message: error });
    }
  };
}

export default new Authentication();
