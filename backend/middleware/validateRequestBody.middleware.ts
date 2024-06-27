import { NextFunction, Request, Response } from "express";
import { ZodAny, ZodTypeAny, z } from "zod";

export const validateRequestBody =
  (schema: ZodTypeAny) =>
  (request: Request, response: Response, next: NextFunction) => {
    try {
      request.body = schema.parse(request.body);
      return next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return response
          .status(400)
          .json({ message: error.flatten().fieldErrors });
      } else {
        console.log(error);
        return response.status(400).json({ message: error });
      }
    }
  };
