import { Request } from 'express';

export interface LoggedUser {
  sub: number;
  email: string;
  name: string;
}

export interface RequestWithUser extends Request {
  user: LoggedUser;
}
