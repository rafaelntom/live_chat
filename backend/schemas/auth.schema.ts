import { z } from "zod";

export const ZodUserSchema = z
  .object({
    fullName: z.string().min(1),
    username: z.string().min(1),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    gender: z.enum(["male", "female"]),
    profilePicture: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type UserType = z.infer<typeof ZodUserSchema>;
