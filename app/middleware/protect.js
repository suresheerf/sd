import { promisify } from 'util';
import jsonwebtoken from 'jsonwebtoken';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';
import {JWT_SECRET } from '../config.js';
const { verify} = jsonwebtoken;



const protect = catchAsync(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new AppError('you are not logged in! please login to get access', 401));
  }
  const data = await promisify(verify)(token,JWT_SECRET);

  req.user = data.user;

  next();
});

export default protect;
