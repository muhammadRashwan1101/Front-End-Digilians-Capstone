import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import PageTransition from "../utils/PageTransition";
import api from "../apis/axios";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const sendData = async (data) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.post("register", data);
      setError(response.message);

      setLoading(false);
    } catch (error) {
      const message = error.response?.data.message || error.message;
      setError(message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <PageTransition>
        <div className="container mx-auto flex justify-center px-6 py-12 gap-5">
          <div className="relative">
            <img
              src={
                "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="login hero image"
              className="w-[35rem] aspect-[3/4] object-cover rounded-2xl"
            />
            <h2 className="absolute top-5 left-1/2 transform -translate-x-1/2 text-white text-4xl">
              VisioCreate
            </h2>
          </div>
          <div className="flex flex-col justify-center px-6 py-12 lg:px-8 w-[30%]">
            <div className="mt-10 w-full">
              <form onSubmit={handleSubmit(sendData)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm/6 font-medium text-gray-800"
                  >
                    Enter a username
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      type="text"
                      {...register("name", {
                        required: "Username is required",
                      })}
                      className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-700 outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-lime-500 sm:text-sm/6"
                    />
                    {errors.name && (
                      <p className="text-red-500 mt-2">{errors.name.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-800"
                  >
                    Enter Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-700 outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-lime-500 sm:text-sm/6"
                    />
                    {errors.email && (
                      <p className="text-red-500 mt-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-800"
                    >
                      Enter a Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-700 outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-lime-500 sm:text-sm/6"
                    />
                    {errors.password && (
                      <p className="text-red-500 mt-2">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm/6 font-medium text-gray-800 mb-2"
                    >
                      Confirm your password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      {...register("confirmPassword", {
                        required: "Password is required",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                      className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-700 outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-lime-500 sm:text-sm/6"
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 mt-2">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                  {error && (
                    <p className="text-red-500 mt-2 text-center">{error}</p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-lime-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-lime-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    disabled={loading}
                  >
                    {loading ? "Signing Up..." : "Sign Up"}
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm/6 text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-lime-500 hover:text-lime-600"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
