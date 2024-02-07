import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { Connection as ConnectionInstance } from "./lib";
import { router as userRouter } from "./modules/users";
import { router as eventRouter } from "./modules/events";
import swaggerSpec from "./docs/swaggerConfig";

import OtherMiddlewareInstance from "./middlewares";
import serverConfig from "./config";

class Server {
  public readonly app: express.Application;

  constructor() {
    dotenv.config();
    this.app = express();
  }

  async bootstrap(): Promise<void> {
    await this.configure();
    this.routes();
  }

  async configure(): Promise<void> {
    await ConnectionInstance.connectDb();
    dotenv.config();
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,PATCH,DELETE",
        allowedHeaders: ["Content-Type", "Authorization"],
        optionsSuccessStatus: 200,
      })
    );
    this.app.use(OtherMiddlewareInstance.Logger);
    this.app.use(OtherMiddlewareInstance.addCustomHeader);
  }

  routes(): void {
    this.app.use("/users", userRouter);
    this.app.use("/events", eventRouter);

    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    this.app.use(
      "/health-check",
      (req: express.Request, res: express.Response) =>
        res.status(200).send("Health is ok")
    );

    this.app.use("*", (req: express.Request, res: express.Response) => {
      res.status(404).send("URL not found");
    });
  }

  public start(): void {
    // eslint-disable-nextline no-console
    this.app.listen(serverConfig.port, () => {
      console.log(`listening on port: ${serverConfig.port}`);
    });
  }
}
export default Server;
