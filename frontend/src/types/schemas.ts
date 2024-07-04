import { z } from "zod";

export const signUpSchema = z
  .object({
    fullName: z.string().min(1, { message: "Full name is required" }),
    username: z.string().min(1, { message: "Username is required" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    gender: z.enum(["male", "female"], { message: "Gender is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
