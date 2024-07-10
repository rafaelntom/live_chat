import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import { loginSchema } from "../../types/schemas";
import { FormValues, LoginFormValues } from "../../types/interfaces";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { loading, login } = useLogin();

  const onSubmit = handleSubmit(async (data: LoginFormValues) => {
    await login(data.username, data.password);
  });

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80 flex flex-col">
        <h1 className="text-2xl font-semibold text-center pb-10 flex flex-col gap-2 font-open-sans">
          Login <span className="text-sky-400">Tozini Live Chat</span>
        </h1>

        <form className="flex flex-col font-roboto gap-4" onSubmit={onSubmit}>
          <FormInput
            errors={errors}
            label="Username"
            name="username"
            register={register}
            placeholder="John Doe"
            type="text"
          />

          <FormInput
            errors={errors}
            label="Password: "
            name="password"
            register={register}
            placeholder=""
            type="password"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn glass mt-4 font-roboto text-lg text-white"
            aria-label="Login"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
          <Link
            to={"signup"}
            className="mt-2 text-white font-open-sans text-center"
          >
            Don't have an account?
          </Link>
        </form>

        {/* REMOVE THIS AFTER DEPLOY */}
        <Link
          to={"home"}
          className=" mt-2 text-white font-open-sans text-center"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Login;
