import Buyers from '@/components/buyers/Buyers';
import Post from '@/components/post/Post.jsx';
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../config/database";

const Profile = () => {

    const [activeTab, setActiveTab] = useState(1);
    const [user, loading] = useAuthState(auth);
    const userPhoto = user?.photoURL;
    const userEmail = user?.email;
    const userName = user?.displayName;
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    if (loading) {
        return (
            <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-slate-950 flex justify-center items-center ">
                <div className="flex justify-center items-center">
                    <div className="inline-flex  rounded-full h-8 w-8 border-4 border-blue-50"></div>
                </div>
            </div>
        )
    } else if (!user || !user.emailVerified) {
        return (
            <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-slate-950 ">
                <h2 className="text-4xl font-bold mb-8 justify-center text-center dark:text-slate-50 " >Profile Page</h2>
                <h2 className="text-2xl font-bold mb-8 justify-center text-center dark:text-slate-50" >You need to be Sign In</h2>
                <div className='items-center justify-center flex'>
                    <button className="bg-blue-500 hover:bg-slate-900 dark:hover:bg-blue-900 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline justify-center text-center items-center" type="button">
                        Sign In
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='dark:bg-slate-950'>
                
                <div className="h-[50vh] bg-cover bg-center  " style={{ backgroundImage: 'url(/profilebg.jpg)' }}>
                    <h1 className='text-4xl font-bold text-center pt-[10%]  text-stone-200 '>Welcome to our Wolfers</h1>
                </div>
                <div className='flex flex-row justify-between dark:bg-slate-950'>
                    <div className="bg-img flex ">

                        <img
                            className="rounded-full w-32 h-32 object-cover absolute top-[55%] left-0 ml-6 mr-4 mb-16 outline-3 outline-slate-50"
                            src={userPhoto}
                            alt="Profile picture"
                        />

                        <div className="ml-40 dark:bg-slate-950">
                            <h1 className='text-3xl font-bold dark:text-slate-50'>{userName}</h1>
                            <h1 className='text-[1.5rem] dark:text-slate-300'>{userEmail}</h1>
                        </div>
                    </div>
                    <div>
                        <button className='rounded-full p-2 mt-3 mr-3 text-[1.5rem] text-white shadow-sm hover:bg-slate-900 bg-slate-800  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900'>Log out</button>
                    </div>
                </div>
                <br />
                <hr className='border-zinc-600' />
                <div className="flex w-[100%] dark:bg-slate-950">
                    <div
                        className={`flex-1 dark:text-slate-50 text-center py-4 cursor-pointer text-[1rem] border-b-2 ${activeTab === 1 ? ' border-blue-500 font-semibold' : 'text-gray-500 border-gray-200 dark:text-slate-500'
                            }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Post
                    </div>
                    <div
                        className={`flex-1 dark:text-slate-50 text-center py-4 cursor-pointer text-[1rem] border-b-2 ${activeTab === 2 ? ' border-blue-500 font-semibold' : 'text-gray-500 border-gray-200 dark:text-slate-500'
                            }`}
                        onClick={() => handleTabClick(2)}
                    >
                        Buyers
                    </div>


                </div>
                {activeTab === 1 ?
                    <div className="flex w-[100%]">
                        <Post />
                    </div> :
                    <div className="flex w-[100%]">
                        <Buyers />
                    </div>
                }
            </div>
        )
    }
}

export default Profile