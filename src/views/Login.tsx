import React, { useState } from "react";
import { signIn } from "../apis/auth";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../NotificationContext";

const Login = () => {
  const { showNotification } = useNotification();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>(null);
  const navigate = useNavigate();

  const validateLoginForm = () => {
    const validationErrors: any = {};
    if (username === "") {
      validationErrors.username = "Username Required";
    }
    if (password === "") {
      validationErrors.password = "Password Required";
    }
    const hasErrors = Boolean(Object.keys(validationErrors).length);
    return { hasErrors, validationErrors };
  };

  const submit = () => {
    const { hasErrors, validationErrors } = validateLoginForm();
    if (hasErrors) {
      setErrors(validationErrors);
      return;
    }
    setErrors(null);
    signIn({ username, password })
      .then((res) => {
        showNotification("success", "Logged in successfully", "", "topRight");
        navigate("/admin/dashboard");
      })
      .catch((err) => {
        showNotification("error", "Error occurred", "", "topRight");
      });
  };
  return (
    <>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="w-auto h-10 mx-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Amsa Infotech Pvt. Ltd."
          />
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-1">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="text"
                autoComplete="phone"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {errors && (
              <span className="ml-2 text-sm text-red-500">
                {errors.username}
              </span>
            )}
          </div>

          <div className="py-5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {errors && (
              <span className="ml-2 text-sm text-red-500">
                {errors.password}
              </span>
            )}
          </div>

          <div>
            <button
              onClick={() => submit()}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
