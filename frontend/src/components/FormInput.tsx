import { FormInputProps } from "../types/interfaces";

export const FormInput = ({
  label,
  name,
  register,
  errors,
  placeholder,
  type = "text",
}: FormInputProps) => {
  return (
    <label htmlFor={name} className="flex flex-col ">
      <span>{label}</span>
      <input
        type={type}
        id={name}
        {...register(name)}
        className="input input-bordered placeholder:text-opacity-20 placeholder:text-gray-400"
        placeholder={placeholder}
      />
      {errors[name] && (
        <span className="text-red-500 text-xs text-opacity-80 mt-1">
          {errors[name]?.message}
        </span>
      )}
    </label>
  );
};

export default FormInput;
