import { useState, useCallback } from 'react';

import Image from 'next/image';
import useHeader from '@/customHooks/useHeader';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);


    const togglePopover = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const { logout, loginpage, userEmail,  userPhoto , user,
        uploadpage, homepage, chartingpage, profilepage, storepage, } = useHeader()


    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-50 p-6 dark:bg-slate-950 ">
            <div className="flex items-center flex-shrink-0 text-gray-900 mr-6 cursor-pointer" onClick={homepage}>

                <Image className='border-2  dark:border-slate-300 border:rounded-full rounded-full' src="/favicon.ico" alt="Logo" width={40} height={40} />

                <span className="font-semibold text-3xl  tracking-tight ml-2 dark:text-slate-50 cursor-pointer" > Wolfers</span>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 cursor-pointer border rounded text-gray-900 dark:text-slate-50 border-gray-400 hover:text-gray hover:border-gray"
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                        console.log('Menu open:', isMenuOpen);
                    }}
                >
                    <span className="sr-only">View Cart</span>
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path
                            d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>

            </div>
            <div
                className={`${isMenuOpen ? 'block' : 'hidden'
                    } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
                <div className="text-sm lg:flex-grow">
                    <span className="block mt-4 text-[1.15rem]  lg:inline-block lg:mt-0 text-gray-900 dark:text-slate-200 pt-2 hover:dark:text-slate-50 cursor-pointer hover:text-gray-900 mr-4" 
                    onClick={chartingpage}>
                        Cart
                    </span>
                    <span className="block pt-2 mt-4 text-[1.15rem]  lg:inline-block lg:mt-0 text-gray-900 dark:text-slate-200 hover:dark:text-slate-50 cursor-pointer hover:text-gray-900 mr-4"
                    onClick={storepage}>
                        Store
                    </span>

                    <span className="block pt-2 mt-4 text-[1.15rem]  lg:inline-block lg:mt-0 text-gray-900 dark:text-slate-200 hover:dark:text-slate-50 cursor-pointer  hover:text-gray-900"
                    onClick={uploadpage}>
                        Upload
                    </span>
                    {user && <>
                    <span className="block pt-2 mt-4 text-[1.15rem]  md:inline-block lg:mt-0 text-gray-900 dark:text-slate-200 hover:dark:text-slate-50 cursor-pointer  hover:text-gray-900 lg:hidden">
                        Profile
                    </span>
                    <br/>
                    <span className="block py-2 my-4 text-[1.15rem]  md:inline-block lg:mt-0 text-gray-900 dark:text-slate-200 hover:dark:text-slate-50 cursor-pointer  hover:text-gray-900 lg:hidden">
                        Logout
                    </span>
                    </>
                    }
                    
                </div>
                <div className="flex items-center ">
                    {user &&
                        <div className="flex-shrink-0 flex items-center" onClick={togglePopover}>
                            <img
                                className="rounded-full border-2 dark:border-slate-300"
                                src={userPhoto}
                                alt="Profile Picture"
                                width={40}
                                height={40}
                            />
                            <div className="flex-col ml-2 dark:text-slate-50 pl-2">
                                <span className={`${isMenuOpen ? 'block' : 'hidden'}`}>{userEmail}</span>
                            </div>
                        </div>
                    }
                    {!user && <span className='text-[1.25rem]  text-gray-900 dark:text-slate-200 hover:dark:text-slate-50 cursor-pointer hover:text-gray-900'>
                        <h1 onClick={loginpage}>Sign in</h1>
                    </span>}

                </div>
            </div>
            {isOpen && (
                <div className=" inset-0 flex absolute left-[80rem] top-[20px]   bg-opacity-50 h-[150px] ">
                    <div className="bg-white  border-2 border-gray-400 rounded-lg pt-8  max-w-xl   w-[250px] backdrop-filter backdrop-blur-lg dark:bg-slate-900 dark:text-white">
                        <button
                            className="absolute  top-2 right-2 text-gray-400 hover:text-gray-700 focus:outline-none"
                            onClick={handleClose}
                        >
                            <span className="sr-only">View Cart</span>
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>


                        <div className='border-t-2 mt-2'>
                            <h1 className='text-[1.25rem] text-center p-2 cursor-pointer hover:text-blue-500' onClick={profilepage}>your profile</h1>
                            <h1 className='text-[1.15rem] border-t-2 text-center p-2 cursor-pointer' onClick={logout}>Logout</h1>
                        </div>





                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
