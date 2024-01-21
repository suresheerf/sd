import Employee from "./model.js";
import isEmployeeValid from "./validator.js";
import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId({
    dictionary:[
        "2","3","4","5","6","7","8","9","a","b","c","d","e",
        "f","g","h","j","k","","m","n","p","q","r","s","t",
        "u","v","w","x","y","z"
    ],
    length:10
});

export const createEmployeeId = async ()=>{
    let employeeId;
    let employee;
    do{

        employeeId = uid.randomUUID();
        employee = await Employee.findOne({employeeId});
    }while(employee);
 return employeeId
}

export const createEmployee = async (employeeObj)=>{

    await isEmployeeValid(employeeObj)
    return Employee.create(employeeObj);
}

export const getEmployeeById = (employeeId) => Employee.findOne({employeeId});

export const updateEmployee = async (employeeObj)=> {
    await isEmployeeValid(employeeObj)

    return Employee.updateOne({employeeId:employeeObj.employeeId},employeeObj)
}

export const deleteEmployee = (employeeId) => Employee.deleteOne({employeeId})
