import * as express from "express";
import { UserInterface } from "../database/models/user.model";

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}
