import Image from "next/image";
import SignupImage from "../../../../public/assets/auth-11.png";
import SigninForm from "@/components/form/SigninForm";

export default function SigninPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={SignupImage}
          alt="Doctor with patient"
          fill
          className="object-cover"
          priority
        />
        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Form container */}
      <div className="w-full max-w-md z-10 px-5 bg-gray-100 border py-8  rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-700">Patient Login</h1>
          <p className="text-slate-600 mt-2">
            Enter your credentials & create your account
          </p>
        </div>

        <SigninForm />
      </div>
    </div>
  );
}
