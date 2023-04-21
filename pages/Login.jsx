import useLogin from "@/customHooks/useLogin";

const Login = () => {

    const { signpage, onSubmitHandler, setemail, setpassword, email, password, error, loader, loginError } = useLogin()

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
            <div className="bg-white p-8 rounded-lg shadow-lg  dark:bg-slate-900">
                <h2 className="text-4xl font-bold mb-8 justify-center text-center dark:text-slate-50" >Login</h2>
                <form className="flex flex-col items-center justify-center">
                    <div className="w-full mb-4">
                        <label className="text-gray-700 font-bold mb-2 dark:text-slate-200" htmlFor="email">
                            Email
                        </label>
                        <input className="w-full border dark:text-slate-50 dark:bg-slate-950  border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email" placeholder="Email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                        {!email && <p className="text-md text-red-500 text-center">{error}</p>}
                    </div>
                    <div className="w-full mb-4">
                        <label className="text-gray-700 font-bold mb-2 dark:text-slate-200" htmlFor="password">
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
                    <div className="text-gray-700 dark:text-slate-300">
                        <p>Create an account with us?
                            <span className="text-slate-500 font-bold hover:text-slate-900 cursor-pointer dark:text-slate-50 dark:hover:text-blue-700"
                                onClick={signpage}
                            > Sign up
                            </span>
                        </p>
                    </div>
                    <br />
                    <br />
                    {loader ? <button className="bg-blue-500 hover:bg-slate-900 dark:hover:bg-blue-900 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onSubmitHandler}>
                        Sign In
                    </button> :
                        <button className="bg-blue-500 hover:bg-slate-900 dark:hover:bg-blue-900 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="button">
                            <div class="flex justify-center items-center">
                                <div class="inline-flex rounded-full h-8 w-8 border-4 border-blue-50"></div>
                            </div>
                        </button>
                    }
                    {loginError && <p className="text-md text-red-500 text-center">{loginError}</p>}

                </form>
                <div className="flex items-center justify-center mt-8">
                    <button className="border-zinc-300 dark:bg-blue-950 hover:dark:bg-blue-800 dark:hover:border-zinc-200 border-2 dark:text-slate-400 hover:dark:text-slate-50 hover:border-zinc-900 text-slate-500 hover:text-slate-900 dark:hover: font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline">
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
