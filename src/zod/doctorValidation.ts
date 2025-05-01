import { z } from "zod";

const doctorScheam = z
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
  avatar: z.any().optional(),
  
})

 const doctorRegisterSchema = doctorScheam
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

  const updateDoctorSchema = doctorScheam.deepPartial();
export type TDoctorRegister = z.infer<typeof doctorRegisterSchema>;
export { doctorRegisterSchema,updateDoctorSchema };