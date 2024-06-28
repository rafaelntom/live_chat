import { z } from "zod";

// Define the base schema
const BaseUserSchema = z.object({
  fullName: z.string().min(1),
  username: z.string().min(1),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
  gender: z.enum(["male", "female"]),
  profilePicture: z.string().optional(),
});

const ZodUserSchema = BaseUserSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
);

const loginSchema = BaseUserSchema.pick({ username: true, password: true });

type UserType = z.infer<typeof ZodUserSchema>;
type LoginType = z.infer<typeof loginSchema>;

export { ZodUserSchema, UserType, loginSchema, LoginType };
