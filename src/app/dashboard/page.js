// src/app/dashboard/page.js
"use client";
import Image from 'next/image';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import Loader from '../components/Loader';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (loading) {
    return <Loader />;
  }

  const handleLogout = () => {
    signOut({ callbackUrl: '/login' });
  };

  return (
    <div className="h-[calc(100vh-69px)] bg-gradient-to-r from-indigo-500 to-purple-500 flex flex-col items-center justify-center py-10">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-lg w-full md:max-w-2xl lg:max-w-3xl">
        <div className="flex items-center justify-between mb-6 flex-wrap">
          <div className="flex items-center flex-wrap">
            <Image
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-indigo-500 shadow-md"
              src="/img/user.avif"
              alt="User Image"
              width={80}
              height={80}
            />
            <div className="ml-4 sm:ml-6 mt-4 sm:mt-0">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                👋 Welcome {session.user.name}
              </h2>
              <p className="text-gray-600">{session.user.email}</p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg text-center mb-6 shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold text-indigo-700">Your Personal Dashboard</h3>
          <p className="text-gray-600 mt-2">Here you can view and manage your details.</p>
        </div>

        <div className="text-center">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
