

import { countryList } from "@/constants/countries";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  IdcardOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";


// const specializations = [
//     "Cardiologist",
//     "Dermatologist",
//     "Neurologist",
//     "Pediatrician",
//     "Orthopedic",
//     "Gynecologist",
//     "Psychiatrist",
//     "Dentist",
//     "General Physician",
//   ];
const doctorFormFields: FormField[] = [
    {
      name: "firstName",
      label: "First Name",
      component: "input",
      placeholder: "Enter first name",
      prefix: <UserOutlined />,
      size: "large",
    },
    {
      name: "lastName",
      label: "Last Name",
      component: "input",
      placeholder: "Enter last name",
      prefix: <UserOutlined />,
      size: "large",
    },
    {
      name: "email",
      label: "Email",
      component: "input",
      type: "email",
      placeholder: "Enter email",
      prefix: <MailOutlined />,
      size: "large",
    },
    {
      name: "contactNo",
      label: "Phone",
      component: "input",
      type: "phone",
      placeholder: "Enter phone number",
      prefix: <PhoneOutlined />,
      size: "large",
    },
    {
      name: "password",
      label: "Password",
      component: "input",
      type: "password",
      placeholder: "Enter password",
      prefix: <EyeInvisibleOutlined />,
      size: "large",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      component: "input",
      type: "password",
      placeholder: "Enter confirm password",
      prefix: <EyeInvisibleOutlined />,
      size: "large",
    },
    // {
    //   name: "specialization",
    //   label: "Specialization",
    //   component: "select",
    //   placeholder: "Please select specialization",
    //   size: "large",
    //   options: specializations.map((spec) => ({
    //     label: spec,
    //     value: spec,
    //   })),
    // },
    {
      name: "gender",
      label: "Gender",
      component: "select",
      placeholder: "Please select gender",
      size: "large",
      options: ["MALE", "FEMALE", "OTHER"].map((spec) => ({
        label: spec,
        value: spec,
      })),
    },
    {
      name: "yearsOfExperience",
      label: "Years of Experience",
      component: "input",
      type: "text",
      placeholder: "Enter years of experience",
      prefix: <IdcardOutlined />,
      size: "large",
    },
    {
      name: "address",
      label: "Clinic Address",
      component: "textarea",
      placeholder: "Enter clinic address",
      size: "large",
    },
    {
      name: "licenseNo",
      label: "License Number",
      component: "input",
      type: "text",
      placeholder: "Enter license number",
      prefix: <IdcardOutlined />,
      size: "large",
    },
    {
      name: "country",
      label: "Country",
      component: "select",
      placeholder: "Please select country",
      size: "large",
      options: countryList.map((spec) => ({
        label: spec,
        value: spec,
      })),
    },
    
    {
      name: "avatar",
      label: "Profile Picture",
      component: "upload",
      rules: [{ required: true, message: "Please upload profile picture" }],
    },
  ];
  
  // const daysOfWeek = [
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];
  
  type FieldType = "input" | "select" | "textarea" | "upload";
  
  interface FormField {
    name: string;
    label: string;
    type?: string; // input type: text, email, password etc.
    placeholder?: string;
    size?: "small" | "middle" | "large";
    component: FieldType;
    prefix?: React.ReactNode;
    options?: { label: string; value: string | number }[]; // for select
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rules?: any[]; // for upload or advanced validation
  }

  export default  doctorFormFields