import { Schema,model } from "mongoose";

const employeeSchema = new Schema({
    employeeId:{type:String},
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    dateOfBirth:{type:Date},
    department:{type:String,enum:['marketing','it','hr','sales']},
    position:{type:String}
},{timestamps:true});


const Employee = model('Employee',employeeSchema);

export default Employee;