import React from 'react';

const ProfilePage = () => {
   
    const user = {
        name: "Marsad Alam Yaj",
        email: "yaj@example.com",
        id: "1557",
        school: "Heritage Public School",
        class: "Class 2",
        bio: "Passionate young developer working on Mango Library."
    };

    return (
        <div className="min-h-screen bg-base-200 py-10">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-primary p-6 text-center text-white font-bold text-2xl">
                    User Profile
                </div>
                <div className="p-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://img.icons8.com/clouds/100/000000/user.png" alt="Profile" />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
                        <p className="text-gray-600"><strong>ID:</strong> {user.id}</p>
                        <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
                        <p className="text-gray-600"><strong>School:</strong> {user.school} ({user.class})</p>
                        <p className="italic text-gray-500">{user.bio}</p>
                        <div className="pt-4">
                            <a href="/profile/update" className="btn btn-primary btn-outline">Update Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;