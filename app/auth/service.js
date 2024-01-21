import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config.js';
export default (data, organizationId) =>
  jwt.sign(data, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });