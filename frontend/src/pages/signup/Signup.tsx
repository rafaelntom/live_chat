import React, { useState } from "react";

interface NewUser {
  fullName: string;
  username: string;
  password: string;
  gender: "male" | "female";
  profilePicture?: string;
}

const Signup: React.FC = () => {
  const [user, setUser] = useState<NewUser>({
    fullName: "",
    username: "",
    password: "",
    gender: "male",
    profilePicture: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", user); // Replace with your form submission logic
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80">
        <h1 className="text-2xl font-semibold text-center pb-10 flex flex-col gap-2 font-open-sans">
          Sign Up <span className="text-sky-400">Tozini Live Chat</span>
        </h1>

        <form
          className="flex flex-col font-roboto gap-4"
          onSubmit={handleSubmit}
        >
          <label htmlFor="fullName" className="flex flex-col gap-2">
            Full Name:
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              required
              className="input input-bordered"
            />
          </label>

          <label htmlFor="username" className="flex flex-col gap-2">
            Username:
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              required
              className="input input-bordered"
            />
          </label>

          <label htmlFor="password" className="flex flex-col gap-2">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              className="input input-bordered"
            />
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={user.gender === "male"}
              onChange={handleChange}
              className="form-radio h-5 w-5 text-sky-400"
            />
            <span className="">Male</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={user.gender === "female"}
              onChange={handleChange}
              className="form-radio h-5 w-5 text-sky-400"
            />
            <span className="">Female</span>
          </label>

          <label htmlFor="profilePicture" className="flex flex-col gap-2">
            Profile Picture URL:
            <input
              type="text"
              id="profilePicture"
              name="profilePicture"
              value={user.profilePicture}
              onChange={handleChange}
              className="input input-bordered"
            />
          </label>

          <button
            type="submit"
            className="btn btn-success font-open-sans text-base tracking-wide text-white mt-4"
            aria-label="Create User"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
