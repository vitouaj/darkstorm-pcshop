import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = () => setRememberMe(!rememberMe);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      console.log(user);
      setLoading(false);
      toast.success("Successfully logged in ");
      navigate("/cart-checkout");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-500 to-black-500 dark:bg-gray-900 h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:border dark:border-gray-700 dark:bg-gray-800">
        <div className="p-6 space-y-4 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Sign in to your account
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <span className="ml-2 text-sm">Remember me</span>
              </label>
            </div>
            <div className="mb-4">
              <Link
                to="/forgetpass"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md p-3 focus:outline-none"
            >
              Sign in
            </button>
          </form>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              to="/signup"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
