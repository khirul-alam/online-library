"use client";
import React from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log({ name, email, photo, password });
    toast.success("Account created successfully!");
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-10 px-4">
      <div className="card w-full max-w-lg shadow-2xl bg-base-100 p-4">       
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-primary">Register</h1>
          <p className="py-2 text-gray-500">Join our library community today!</p>
        </div>

        <form onSubmit={handleRegister} className="card-body p-0">          
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-bold text-black mb-2">Full Name</span>
            </label>
            <input 
              name="name" 
              type="text" 
              placeholder="Enter your full name" 
              className="input input-bordered w-full focus:border-primary" 
              required 
            />
          </div>
          
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-bold text-black mb-2">Email Address</span>
            </label>
            <input 
              name="email" 
              type="email" 
              placeholder="email@example.com" 
              className="input input-bordered w-full focus:border-primary" 
              required 
            />
          </div>
         
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-bold text-black mb-2">Photo URL</span>
            </label>
            <input 
              name="photo" 
              type="url" 
              placeholder="https://example.com/photo.jpg" 
              className="input input-bordered w-full focus:border-primary" 
              required 
            />
          </div>
          
          <div className="form-control w-full mb-6">
            <label className="label">
              <span className="label-text font-bold text-black mb-2">Password</span>
            </label>
            <input 
              name="password" 
              type="password" 
              placeholder="Choose a strong password" 
              className="input input-bordered w-full focus:border-primary" 
              required 
            />
          </div>
         
          <div className="form-control mt-2">
            <button type="submit" className="btn btn-accent w-full font-bold text-black">Create Account</button>
          </div>

          <div className="divider">OR</div>
          
          <button 
            type="button" 
            className="btn btn-outline btn-secondary w-full"
          >
            <FcGoogle />
            Sign up with Google
          </button>

          <p className="text-center mt-4 text-sm">
            Already have an account? <Link href="/login" className="text-primary font-bold link-hover">Login now</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;