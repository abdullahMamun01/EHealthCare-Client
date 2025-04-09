import { Controller } from "react-hook-form";
import { Input } from "antd";

interface TextAreaFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  size?: "large" | "middle" | "small";
  labelClassName?: string;
  rows?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  name,
  label,
  placeholder = "",
  control,
  className = "p-2.5",
  size = "large",
  labelClassName = "text-md text-gray-700 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-4",
  rows = 4,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, formState: { errors } }) => (
          <div className="relative">
            <Input.TextArea
              {...field}
              id={name}
              placeholder={placeholder}
              className={className}
              size={size}
              rows={rows}
            />
            {errors[name] && (
              <span className="text-red-500 text-sm mt-1">
                {errors[name]?.message as string}
              </span>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default TextAreaField;
