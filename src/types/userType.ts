

export interface IUser  {
    id: string;
    name: string;
    email: string;
    photo: string | null;
    contactNo: string;
    role: "ADMIN" | "DOCTOR" | "PATIENT";
  };
  