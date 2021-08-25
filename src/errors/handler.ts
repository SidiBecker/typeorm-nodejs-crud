import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, respose, next) => {
  console.error(error);

  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach((err) => {
      console.log((errors[err.path] = err.errors));
    });

    return respose
      .status(400)
      .json({ messsage: 'Validation fails', errors: errors });
  }

  return respose.status(500).json({ messsage: 'Internal server error' });
};

export default errorHandler;
