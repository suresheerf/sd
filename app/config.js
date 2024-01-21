import { config } from "dotenv";

config();


export const NODE_ENV = process.env.NODE_ENV || 'production';

export const PORT = process.env.PORT || 3000;

export const DBURI = process.env.DBURI || 'mongodb://localhost:27017/sd';

export const JWT_SECRET = process.env.JWT_SECRET;

export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;