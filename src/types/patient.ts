export interface IPatient {
  id: string;
  name: string;
  email: string;
  photo: string | null;
  contactNo: string | null;
  address: string | null;
  gender: string | null;
  country: string;
  age?:number | string
}
