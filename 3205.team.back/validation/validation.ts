import Joi from 'joi';
import { ReqData } from '../types/types';
import { NextFunction, Request, Response } from 'express';

function emailValidation(email: string): boolean {
  const schema = Joi.string().email({ minDomainSegments: 2 }).required();

  const validate = schema.validate(email);

  return validate.error ? false : true;
}

function numberValidation(number: string): boolean {
  const schema = Joi.number();

  const validate = schema.validate(number);

  return validate.error ? false : true;
}

export const validation = function (
  req: Request<{}, {}, ReqData>,
  res: Response,
  next: NextFunction
) {
  let { email, number } = req.body;

  number = number.replaceAll('-', '').trim();

  let validate = false;

  if (number) {
    validate = emailValidation(email) && numberValidation(number);
  } else {
    validate = emailValidation(email);
  }

  if (!validate) {
    res.status(400).send('Validation error');
    return;
  }

  res.locals.user = {
    email: email,
    number: number,
  };

  next();
};
