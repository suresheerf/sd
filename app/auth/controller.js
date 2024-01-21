import catchAsync from '../utils/catchAsync.js';
import signToken from './service.js';
export const login = catchAsync(async(req,res,next)=>{

    if(req.body.email === 'admin@gmail.com' && req.body.password === 'admin@123'){
        const token = signToken({user:'admin'});
        res.status(200).json({token})
    }else{
        res.status(400).json({message:"please pass valid credentials"})
    }

})

export const logout = catchAsync(async(req,res,next)=>{

})