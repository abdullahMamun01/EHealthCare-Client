import { Controller } from "react-hook-form";
import { Button, Input } from "antd";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
interface InputFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  clasName?: string;
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  size?: "large" | "middle" | "small";
  labelClassName?: string;
  prefix? : React.ReactNode
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  placeholder = "",
  control,
  clasName = "p-2.5",
  size = "large",
  labelClassName = "text-md text-gray-700 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-4",
  type = "text",
  prefix
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-1 ">
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, formState: { errors } }) => (
          <div className="relative">
            <Input
              prefix={prefix}
              {...field}
              id={name}
              placeholder={placeholder}
              className={clasName}
              size={size}
              type={type === "password" ? showPassword ? "text" : "password" : type}
            />
            {type === "password" && (
              <Button
                className="!absolute !right-0 !top-0 !h-full !px-3 !py-2 !bg-transparent !border-none "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4 text-gray-400" />
                ) : (
                  <EyeIcon className="h-4 w-4 text-gray-400" />
                )}
              </Button>
            )}

            {errors[name] && (
              <span className="text-red-500 text-sm !mt-4">
                {errors[name]?.message as string}
              </span>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default InputField;
