import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "email is requered" }),
  password: z.string().min(1, { message: "Password is requered" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "email is requered" }),
  password: z.string().min(6, { message: "Minimum 6 characters requiered" }),
  name: z.string().min(1, { message: "name is requered" }),
});
