"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";
import LoaderBtn from "../components/LoaderBtn";

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post('/api/register', {
                name,
                email,
                password,
            });

            if (res.status === 201) {
                toast.success('Registration successful!');
                setTimeout(() => {
                    router.push('/login');
                }, 1000);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);

            // Handle specific error cases
            if (error.response?.status === 409) {
                toast.error('Email already in use');
            } else if (error.response?.status === 500) {
                toast.error('Server error, please try again later');
            } else {
                toast.error('Registration failed, please try again');
            }
        }
    };

    return (
        <div className="bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="relative my-8 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl font-semibold">Welcome User! Create Your Account</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input
                                            id="name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                            placeholder="Enter Username"
                                            required
                                        />
                                        <label
                                            htmlFor="name"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                            Username
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                            placeholder="Email address"
                                            required
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                            Email Address
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <input
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                            placeholder="Password"
                                            required
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                            Password
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <button
                                            type="submit"
                                            className="bg-gradient-to-r from-blue-300 to-blue-600 text-white rounded-full px-4 py-2 w-full shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <span className="flex items-center justify-center">
                                                    <LoaderBtn />
                                                </span>
                                            ) : (
                                                "Register"
                                            )}
                                        </button>
                                    </div>

                                    <div className="text-center mt-4">
                                        <p className="text-gray-600">
                                            Already have an account?{' '}
                                            <Link href="/login" className="text-blue-600 hover:underline">
                                                Login
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
