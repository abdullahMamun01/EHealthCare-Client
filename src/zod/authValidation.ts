import { z } from "zod";


 const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password should be at least 8 characters" }),
});

 const registerSchema = loginSchema.extend({
  name: z.string().min(3, { message: "Name should be at least 3 characters" }),
  country: z.string().min(3, { message: "Country should be at least 3 characters" }),
});

export { loginSchema, registerSchema };