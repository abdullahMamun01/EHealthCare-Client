import { Controller } from "react-hook-form";
import { Select } from "antd";

interface SelectFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  control: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  size?: "large" | "middle" | "small";
  labelClassName?: string;
  options: { label: string; value: string | number }[];
}

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  label,
  placeholder = "Select an option",
  control,
  size = "large",
  labelClassName = "text-md text-gray-700 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-3",
  options,
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
          <>
            <Select
              {...field}
              id={name}
              placeholder={placeholder}
              size={size}
              options={options}
              onChange={(value) => field.onChange(value)} // Ensure proper change handling
            />
            {errors[name] && (
              <span className="text-red-500 text-sm mt-1">
                {errors[name]?.message as string}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};

export default SelectField;
