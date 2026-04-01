import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import PageTransition from "../utils/PageTransition";
import api from "../apis/axios";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);

  const sendData = async (data) => {
    try {
      const response = await api.post("login", data);
      login(response.data.token);
      navigate("/");
    } catch (error) {
      const message = error.response?.data.message || error.message;
      setError(message);
    }
  };
  return (
    <>
      <PageTransition>
        <div className="container mx-auto flex justify-center px-6 py-12 lg:px-8 gap-5">
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

          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-[30%]">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit(sendData)} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-800"
                  >
                    Email address
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
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-lime-500 hover:text-lime-600"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      type="password"
                      {...register("password", {
                        required: "Password is required",
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
                {error && (
                  <p className="text-red-500 mt-2 text-center">{error}</p>
                )}

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-lime-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-lime-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm/6 text-gray-400">
                Not a member?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-lime-500 hover:text-lime-600"
                >
                  Create New Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
