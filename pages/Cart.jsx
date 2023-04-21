import React from 'react'
import Image from 'next/image';
import useCart from '@/customHooks/useCart';
import { useState, useEffect } from 'react';

const Cart = () => {

    const {
        loader,
        storeCart,
        cancelcart,
        Buyed,
        user,
        loading,
        loginpage,
    } = useCart()
    const [uid, setUid] = useState("");

    useEffect(() => {
        const getUid = async () => {
            const storedUid = await localStorage.getItem("uid");
            setUid(storedUid);
            console.log(storedUid);

        };
        getUid();
    }, []);
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
                <h2 className="text-4xl font-bold mb-8 justify-center text-center dark:text-slate-50 " >Shoping Chart</h2>
                <h2 className="text-2xl font-bold mb-8 justify-center text-center dark:text-slate-50" >You need to be Sign In</h2>
                <div className='items-center justify-center flex'>
                    <button className="bg-blue-500 hover:bg-slate-900 dark:hover:bg-blue-900 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline justify-center text-center items-center" type="button" onClick={loginpage}>
                        Sign In
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className=" flex flex-col items-center min-h-screen dark:bg-slate-950 ">
                <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true"
                >
                    <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] dark:from-[#ff80b5] dark:to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className='justify-center  text-4xl font-bold text-slate-900 my-9 dark:text-slate-50'>
                    <h1>Shopping Cart</h1>
                </div>
                {storeCart && storeCart.filter((item1) => item1.customer && item1.customer.includes(uid)).map((item, index) => {
                    return (<>
                        <div className=' flex lg:w-[60%] md:w-[80%] sm:w-[100%] text-slate-900  border-t-2 border-black justify-between dark:border-slate-50' key={index}>
                            <div className='w-1/2'>
                                <div className='flex'>
                                    <div>
                                        <img
                                            className='bg-slate-200 dark:bg-slate-900 shadow-sm rounded-lg shadow-zinc-800 dark:shadow-slate-600 my-7 mx-3 '
                                            src={item.attachmentURL}
                                            alt="fml"
                                            width={250}
                                            height={250}
                                            layout="reponsive" />
                                    </div>
                                    <div className='flex flex-col justify-between flex-grow'>
                                        <div>
                                            <h1 className='mx-2 mt-7 text-2xl text-slate-950 dark:text-slate-50'>{item.title}</h1>
                                            <h1 className='mx-4 mt-1 dark:text-slate-400 '>category:<span className='text-slate-900 font-bold dark:text-slate-300'>{item.gender}</span></h1>
                                            <h1 className='mx-4 mt-1 text-slate-800 dark:text-slate-400'>Qunatity:<span className='text-slate-900 font-bold dark:text-slate-300'>{item.quantity}</span></h1>
                                            <h1 className='mx-4 mt-1 text-slate-800 dark:text-slate-400'>price:<span className='text-slate-900 font-bold dark:text-slate-300'>{item.price}</span></h1>

                                        </div>
                                        <div className='flex flex-col-reverse mb-7'>
                                            <h1 className='mx-4 mt-1  text-green-600 font-bold'>In Stock</h1>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='w-1/2 relative'>
                                <div className='mt-5 mr-6 font-bold text-2xl text-black absolute top-0 right-0 dark:text-slate-50'>
                                    <p className='text-[1rem] dark:text-slate-400 '>Total</p>
                                    <h1>${item.price * item.quantity}</h1>
                                </div>

                                <div className='mb-6 mr-6 text-end text-lg text-red-600 dark:hover:text-rose-500 absolute bottom-0 right-0 cursor-pointer' onClick={() => cancelcart(item)}>
                                    <h1>Remove</h1>
                                </div>
                            </div>
                        </div>
                        {loader ?
                            <button
                                onClick={() => Buyed(item)}
                                type="submit"
                                className=" lg:w-[60%] md:w-[80%] sm:w-[100%] mb-2 block w-full rounded-md px-3.5 py-2.5 text-center text-sm
                           font-semibold text-white shadow-sm hover:bg-indigo-500 bg-indigo-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Buy the Product
                            </button> :
                            <button className='  className=" lg:w-[60%] md:w-[80%] sm:w-[100%] mb-2 block w-full rounded-md px-3.5 py-2.5 text-center text-sm
                        font-semibold text-white shadow-sm hover:bg-indigo-500 bg-indigo-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"'>
                                <div className="flex justify-center items-center">
                                    <div className="inline-flex  rounded-full h-8 w-8 border-4 border-blue-50"></div>
                                </div>
                            </button>}


                    </>)
                })}


            </div>
        )
    }
}

export default Cart