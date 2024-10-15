import Link from "next/link"

function login() {
    return (
        <>

            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Welcome Back! Log In Your Account</h1>
                            </div>
                            <form>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                                placeholder="Email address"

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
                                                name="password"
                                                type="password"
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                                placeholder="Password"

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
                                                className="bg-gradient-to-r from-blue-300 to-blue-600 text-white rounded-full px-4 py-2 w-full shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                Login
                                            </button>
                                        </div>
                                        <div className="text-center mt-4">
                                            <p className="text-gray-600">Don&apost have an account? <Link href="/register" className="text-blue-600 hover:underline">Sign Up</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default login