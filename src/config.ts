import dotenv from 'dotenv';

interface ServerConfig {
  devMode: string;
  port: number;
  jwtSecret: string;
  mongoUrl: string;
}
dotenv.config();
// Load configuration from .env file
const serverConfig: ServerConfig = Object.freeze({
    devMode: process.env.DEV_MODE ?? 'development',
    port: parseInt(process.env.PORT ?? '8000', 10),
    jwtSecret: process.env.JWT_SECRET ?? '',
    mongoUrl: process.env.MONGO_URL ?? '',
});

export default serverConfig;
