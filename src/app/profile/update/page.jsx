"use client";
import React from 'react';
import toast from 'react-hot-toast';

const UpdateProfile = () => {
    const handleUpdate = (e) => {
        e.preventDefault();
      
        toast.success("Profile Updated Successfully!");
    };

    return (
        <div className="min-h-screen bg-base-200 py-10">
            <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-primary">Update Your Information</h2>
                
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div className="form-control">
                        <label className="label">Full Name</label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered w-full" defaultValue="Marsad Alam Yaj" />
                    </div>

                    <div className="form-control">
                        <label className="label">Bio</label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Tell us about yourself"></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">School Name</label>
                        <input type="text" className="input input-bordered w-full" defaultValue="Heritage Public School" />
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary w-full">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;