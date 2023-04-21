import React from "react";
import { auth } from "../config/database";
import { useAuthState } from 'react-firebase-hooks/auth';
import useSignup from "@/customHooks/useSignup";

const Signup = () => {
    const { onSubmitHandler, loginpage, savefile, setemail,
        setpassword, setusername,email, password, username, loader, error, } = useSignup()
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <div class="flex justify-center items-center">
                    <div class="inline-flex rounded-full h-8 w-8 border-4 border-blue-50"></div>
                </div>
            </div>
        )
    }else if(!user){
    return (
        <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-950">
            <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div  className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] dark:from-[#ff80b5] dark:to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
            <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-slate-900">
                <h2 className="text-4xl font-bold mb-8 justify-center text-center dark:text-slate-50" >Sign Up</h2>
                <form className="flex flex-col items-center justify-center">
                    <div className="w-full mb-4">
                        <label className="text-gray-700 font-bold mb-2 dark:text-slate-200" htmlFor="username">
                            Username
                        </label>
                        <input className="w-full border dark:text-slate-50 dark:bg-slate-950  border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setusername(e.target.value)} />
                        {!username && <p className="text-md text-red-500 text-center">{error}</p>}
                    </div>
                    <div className="w-full mb-4">
                        <label className="text-gray-700 font-bold mb-2 dark:text-slate-200" htmlFor="email">
                            Email
                        </label>
                        <input className="w-full border dark:text-slate-50 dark:bg-slate-950  border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                        {!email && <p className="text-md text-red-500 text-center">{error}</p>}
                    </div>
                    <div className="w-full mb-4">
                        <label className="text-gray-700  font-bold mb-2 dark:text-slate-200" htmlFor="password">
                            Password
                        </label>
                        <input className="w-full border dark:text-slate-50 dark:bg-slate-950  border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        {!password && <p className="text-md text-red-500 text-center">{error}</p>}
                    </div>
                    <div className="w-full mb-8 flex flex-col items-center justify-center">
                        <label className="text-gray-700 font-bold mb-2 dark:text-slate-200" htmlFor="profile-photo">
                            Profile Photo
                        </label>
                        <div className="relative">
                            <input className="opacity-0 absolute top-0 left-0 w-full h-full"
                                id="profile-photo"
                                type="file"
                                onChange={savefile} />
                            <div className="bg-gray-200 dark:bg-slate-950 rounded-md flex items-center justify-center w-16 h-16">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-400">
                                    <path fillRule="evenodd" d="M10 11a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M17 15c-.453 0-.891-.072-1.306-.192.55-.903.882-1.967.882-3.108 0-3.866-3.134-7-7-7s-7 3.134-7 7c0 1.141.332 2.205.882 3.108C3.891 14.928 3.453 15 3 15v2c.453 0 .891-.072 1.306-.192A6.988 6.988 0 0010 19a6.988 6.988 0 005.694-2.192C16.109 16.928 16.547 17 17 17v-2zm-7-4a4 4 0 110-8 4 4 0 010 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-700 dark:text-slate-300">
                        <p>Already have an account?
                            <span className="text-slate-500 font-bold hover:text-slate-900 cursor-pointer dark:text-slate-50 dark:hover:text-blue-700"
                                onClick={loginpage}
                            >  Sign in
                            </span>
                        </p>
                    </div>
                    <br />

                    {loader ?
                        <button className="bg-blue-500 hover:bg-slate-900 dark:hover:bg-blue-900 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={onSubmitHandler}
                        >
                            Sign Up
                        </button>
                        :

                        <button className="bg-blue-500 hover:bg-slate-900 dark:hover:bg-blue-900 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
                            <div class="flex justify-center items-center">
                                <div class="inline-flex rounded-full h-8 w-8 border-4 border-blue-50"></div>
                            </div>
                        </button>
                    }
                </form>
                <div className="flex items-center justify-center mt-8">
                    <button className="border-zinc-300 dark:bg-blue-950 hover:dark:bg-blue-800 dark:hover:border-zinc-200 border-2 dark:text-slate-400 hover:dark:text-slate-50 hover:border-zinc-900 text-slate-500 hover:text-slate-900 dark:hover: font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline">
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
}else if(user && !user.emailVerified){
        return (
            <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-slate-900 ">
            <h2 className="text-4xl font-bold mb-8 justify-center text-center dark:text-slate-50 " >Sign Up</h2>
            <h2 className="text-2xl font-bold mb-8 justify-center text-center dark:text-slate-50" >You need to Virfy you account</h2>

            </div>
          )
      }
}



export default Signup;
