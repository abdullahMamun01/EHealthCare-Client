import { z } from "zod";

 const doctorRegisterSchema = z
  .object({
    firstName: z.string().min(1, "Name is required"),
    lastName: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    gender: z.enum(["MALE", "FEMALE", "OTHER" , 'Male' , 'Female' ,'Other'] , {message: 'Gender is required'}),
    yearsOfExperience: z.coerce.number().min(0, "Years of experience must be a positive number"),
    contactNo: z.string().min(10, "Invalid contact number"),
    address: z.string().min(1, "Address is required"),
    country: z.string().min(1, "Country is required"),
    licenseNo: z.string().min(1, "License number is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
    // avatar : z.custom<File>((file) => file instanceof File, {
    //   message: "Avatar is required",
    // })
    avatar: z.any().optional(),
    // avatar: z
    // .array(
    //   z.object({
    //     uid: z.string(),
    //     lastModified: z.number(),
    //     lastModifiedDate: z.date().optional(), // optional because AntD may not always include this
    //     name: z.string(),
    //     size: z.number(),
    //     type: z.string().optional(), // optional in case not all items include type
    //     originFileObj: z.any().optional(), // optional: AntD includes actual File here if available
    //   })
    // )
    // .min(1, { message: "Avatar is required" }).optional(),
    
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type TDoctorRegister = z.infer<typeof doctorRegisterSchema>;
export { doctorRegisterSchema };