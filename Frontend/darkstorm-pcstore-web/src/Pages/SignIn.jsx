import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = () => setRememberMe(!rememberMe);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);

    // Assuming authentication is successful, redirect to the home page
    navigate("/");
  };

  return (
    <section className="bg-gradient-to-r from-gray-500 to-black-500 dark:bg-gray-900 h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:border dark:border-gray-700 dark:bg-gray-800">
        <div className="p-6 space-y-4 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Sign in to your account
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="input-field"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="input-field"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className="checkbox-field"
                  required
                />
                <label
                  htmlFor="remember"
                  className="text-gray-500 dark:text-gray-300 ml-2"
                >
                  Remember me
                </label>
              </div>
              <a
                href="/forgetpass"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button type="submit" className="button-primary">
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <a
                href="signup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
