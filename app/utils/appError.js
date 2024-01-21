export default class AppError extends Error {
    constructor(message, statusCode, name) {
      super(message);
      if (name) this.name = name;
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      Error.captureStackTrace(this, this.constructor);
    }
  }
  