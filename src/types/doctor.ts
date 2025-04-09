export interface IDoctor {
    id: string;
    name: string;
    email: string;
    photo: string;
    gender: 'MALE' | 'FEMALE' | 'OTHER'; // adjust if you have more enums
    yearsOfExperience: number;
    contactNo: string;
    address: string;
    country: string;
    licenseNo: string;
    biography: string | null;
    workingIn: string | null;
    degrees: string | null;
    consultationFee: number;
    isDeleted: boolean;
    avgRating: number;
    status: 'ACTIVE' | 'INACTIVE'; // update if more statuses exist
    createdAt: string;
    updatedAt: string;
    doctorSpecielites: DoctorSpecialite[];
  }


  interface Specialite {
    id: string;
    name: string;
    icon: string;
    createdAt: string;
    updatedAt: string;
  }
  
  interface DoctorSpecialite {
    specialites: Specialite;
  }