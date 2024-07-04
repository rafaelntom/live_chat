import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { FormValues } from "../pages/signup/Signup";

interface FormInputProps {
  label: string;
  name: Path<FormValues>;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  placeholder?: string;
  type?: string;
}

export const FormInput = ({
  label,
  name,
  register,
  errors,
  placeholder,
  type = "text",
}: FormInputProps) => {
  return (
    <label htmlFor={name} className="flex flex-col gap-2">
      <span>{label}</span>
      <input
        type={type}
        id={name}
        {...register(name)}
        className="input input-bordered placeholder:text-opacity-20 placeholder:text-gray-400"
        placeholder={placeholder}
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name]?.message}</span>
      )}
    </label>
  );
};

export default FormInput;
