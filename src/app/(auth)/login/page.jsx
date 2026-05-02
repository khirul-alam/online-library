"use client";
import React from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    toast.success("Logging in...");
  };

  const handleGoogleLogin = () => {
    toast.success("Redirecting to Google...");
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-10">
      <div className="hero-content flex-col w-full max-w-md">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold">Login Now</h1>
          <p className="py-2 text-gray-500">Welcome back to Mango Library!</p>
        </div>
        <div className="card w-full shadow-2xl bg-base-100 mb-2">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-black font-bold mb-2">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email@example.com"
                className="input input-bordered w-full focus:border-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-black font-bold mb-2">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent text-black font-bold w-full">
                Login
              </button>
            </div>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="btn btn-outline btn-secondary w-full "
            >
              <FcGoogle />
              Login with Google
            </button>

            <p className="text-center mt-4 text-sm">
              New here?{" "}
              <Link
                href="/register"
                className="text-primary font-bold link-hover"
              >
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
