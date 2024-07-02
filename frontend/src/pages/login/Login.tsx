const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80">
        <h1 className="text-2xl font-semibold text-center pb-10 flex flex-col gap-2 font-open-sans">
          Login <span className="text-sky-400">Tozini Live Chat</span>
        </h1>

        <form className="flex flex-col font-roboto gap-4">
          {/* Username label with daisy UI */}
          <label htmlFor="username" className="flex gap-2 flex-col mb-6">
            <span>Username: </span>
            <div className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                id="username"
                name="username"
                className="grow"
                placeholder="Username"
                required
                aria-required="true"
              />
            </div>
          </label>

          {/* Password label with daisy UI */}
          <label htmlFor="password" className="flex gap-2 flex-col">
            <span>Password: </span>
            <div className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                className="grow"
                placeholder="Password"
                required
                aria-required="true"
              />
            </div>
          </label>

          <button
            type="submit"
            className="btn glass mt-4 font-roboto text-lg text-white"
            aria-label="Login"
          >
            Login
          </button>
        </form>

        {/* Style this later to the signup page */}
        <a href="">Don't have an account?</a>
      </div>
    </div>
  );
};

export default Login;
