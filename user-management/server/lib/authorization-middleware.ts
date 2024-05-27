/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

const hashKey = process.env.TOKEN_SECRET ?? '';
if (!hashKey) throw new Error('TOKEN_SECRET not found in env');

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  /* your code here */
  const token = req.get('authorization')?.split('Bearer ')[1];
  if (!token) throw new ClientError(401, 'authentication required');
  req.user = jwt.verify(token, hashKey) as Request['user']; // if error here, its thrown and caught in error-middleware. once verified, add to request object, call next
  next();
}
