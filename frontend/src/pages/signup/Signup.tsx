import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import { FormValues } from "../../types/interfaces";
import { signUpSchema } from "../../types/schemas";
import useSignup from "../../hooks/useSignup";
import { useAuthContext } from "../../hooks/useAuthContext";

const Signup = () => {
  const { userToken } = useAuthContext();

  console.log(userToken);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(signUpSchema) });

  const { loading, signup } = useSignup();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    // Call the signup function here
    await signup(data);
  });

  if (userToken) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80">
        <h1 className="text-2xl font-semibold text-center pb-10 flex flex-col gap-2 font-open-sans">
          Sign Up <span className="text-sky-400">Tozini Live Chat</span>
        </h1>

        <form className="flex flex-col font-roboto gap-4" onSubmit={onSubmit}>
          <FormInput
            errors={errors}
            label="Full Name:"
            name="fullName"
            register={register}
            placeholder="John Doe"
            type="text"
          />

          <FormInput
            errors={errors}
            label="Username:"
            name="username"
            register={register}
            placeholder="johndoe"
            type="text"
          />

          <FormInput
            errors={errors}
            label="Password:"
            name="password"
            register={register}
            placeholder=""
            type="password"
          />

          <FormInput
            errors={errors}
            label="Confirm Password:"
            name="confirmPassword"
            register={register}
            placeholder=""
            type="password"
          />

          <p>Gender:</p>
          <div className="flex px-[2px] flex-col gap-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                {...register("gender")}
                value="male"
                className="form-radio h-5 w-5 text-sky-400"
              />
              <span className="">Male</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                {...register("gender")}
                value="female"
                className="form-radio h-5 w-5 text-sky-400"
              />
              <span className="">Female</span>
            </label>
            {errors.gender && (
              <span className="text-red-500 text-xs text-opacity-80 mt-1">
                {errors.gender.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-success font-open-sans text-base tracking-wide text-white mt-4 disabled:bg-red-500 disabled:text-white
            disabled:text-opacity-45 disabled:cursor-not-allowed"
            aria-label="Create User"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign Up"
            )}
          </button>

          <Link to={"/"} className="mt-2 text-white font-open-sans text-center">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
