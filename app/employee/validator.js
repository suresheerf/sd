import vine from '@vinejs/vine';
import AppError from '../utils/appError.js';

const employeeSchema = vine.object({
  employeeId: vine.string().minLength(4).maxLength(30),
  firstName: vine.string(),
  lastName: vine.string(),
  email: vine.string().email(),
  dateOfBirth: vine.string(),
  department: vine.enum(['marketing','it','hr','sales']),
  position: vine.string()
});

const employeeValidator = vine.compile(employeeSchema);

const isEmployeeValid = async (employeeObj) => {
  try {
    const output = await employeeValidator.validate(employeeObj);
  } catch (err) {
    let message = '';
    err.messages.forEach((error) => {
      message += ` :${error.field} : ${error.message},`;
    });
    throw new AppError(message, 400, 'vine validation error');
  }
};

export default isEmployeeValid;
