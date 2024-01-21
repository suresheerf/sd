import catchAsync from "../utils/catchAsync.js";
import AppError from '../utils/appError.js';
import { createEmployee,getEmployeeById,updateEmployee,deleteEmployee,createEmployeeId } from "./service.js";
import Employee from "./model.js";

export const createOne = catchAsync(async(req,res,next)=>{

    const employeeObj = req.body;
    employeeObj.employeeId = await createEmployeeId();
    const employee = await createEmployee(employeeObj);
    res.status(201).json({status:"success",employee})
})

export const getOne = catchAsync(async(req,res,next)=>{
    if(!req.params.employeeId) return next(new AppError("Please pass employeeId",400))
    const employee = await getEmployeeById(req.params.employeeId);
   if(!employee) return next(new AppError("could not find the employee",404));
    res.status(200).json({status:"success",employee});
})

export const getAll = catchAsync(async(req,res,next)=>{
    const page = req.query.page || 1;
    const perPage = 20;
    const skip = (page-1)* perPage;
    let sort={};
    let match={};
    for(let key in req.query){

        if(key === 'sortBy'){
            if(req.query.sortType === 'ascending') sort= {[req.query.sortBy]:1}
            else sort= {[req.query.sortBy]:-1}
        }
        if(['employeeId',
            'firstName',
            'lastName',
            'email',
            'department',
            'position'].includes(key)){
                match[key]= req.query[key];
        }
    }
    const employees = await Employee.find(match).sort(sort).skip(skip).limit(perPage);
    res.status(200).json({status:"success",employees})
    
})

export const updateOne = catchAsync(async(req,res,next)=>{
    if(!req.params.employeeId) next(new AppError("Please pass employeeId",400))
    const employee = await updateEmployee(req.body);
    res.status(200).json({status:"success",message:"employee updated successfully"})

})

export const deleteOne = catchAsync(async(req,res,next)=>{
    if(!req.params.employeeId) next(new AppError("Please pass employeeId",400))
    
    await deleteEmployee(req.params.employeeId);

    res.status(200).json({status:"success",message:"employee deleted successfully"})
})
