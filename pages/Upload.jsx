import useUpload from "@/customHooks/useUpload"
export default function Upload() {

    const {
        save,
        savefile,
        setprice,
        settitle,
        setgender,
        setcarousel,
        setdescrition,
        descrition,
        title,
        price,
        gender,
        carousel,
        loader,
        error,
        previewImage,
        user,
        loading,
        loginpage,
    } = useUpload()
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
                <h2 className="text-4xl font-bold mb-8 justify-center text-center dark:text-slate-50 " >Upload page</h2>
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
            <div className=" bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-slate-950 ">
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
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Upload page</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-white">
                        Start your bussiness with wolf website.
                    </p>
                </div>
                <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                                Product Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    onChange={(e) => settitle(e.target.value)}
                                    value={title}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 dark:text-slate-50 dark:bg-slate-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {!title && <p className="text-md text-red-500 text-center">{error}</p>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                                Price
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="number"
                                    id="price"
                                    onChange={(e) => setprice(e.target.value)}
                                    value={price}
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-slate-50 dark:bg-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {!price && <p className="text-md text-red-500 text-center">{error}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                                desprication
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    onChange={(e) => setdescrition(e.target.value)}
                                    value={descrition}
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-900 dark:text-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                                {!descrition && <p className="text-md text-red-500 text-center">{error}</p>}

                            </div>
                        </div>
                        <div className="flex items-center justify-center w-500 mx-auto space-x-10">
                            <div className="w-1/3">
                                <select className="border rounded px-4 py-2 dark:bg-slate-900 dark:text-white"
                                    value={gender}
                                    onChange={e => setgender(e.target.value)} >
                                    <option>Men</option>
                                    <option >Women</option>
                                    <option >Kids</option>
                                </select>
                            </div>
                            <div className=" mb-8 flex flex-col items-center justify-center w-1/3">
                                <label className="text-gray-700 font-bold mb-2 dark:text-slate-200 hidden" htmlFor="profile-photo">
                                    Upload Photo
                                </label>
                                <div className="relative">
                                    <input
                                        className="opacity-0 absolute top-0 left-0 w-full h-full"
                                        id="profile-photo"
                                        type="file"
                                        accept="image/png"
                                        onChange={savefile}

                                    />
                                    <div className="bg-gray-200  rounded-md flex items-center justify-center w-16 h-16 dark:bg-slate-600">
                                        {previewImage ? (
                                            <img src={previewImage} alt="Profile Picture" className="w-full h-full object-cover rounded-md" />
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-400 ">
                                                <path fillRule="evenodd" d="M10 11a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M17 15c-.453 0-.891-.072-1.306-.192.55-.903.882-1.967.882-3.108 0-3.866-3.134-7-7-7s-7 3.134-7 7c0 1.141.332 2.205.882 3.108C3.891 14.928 3.453 15 3 15v2c.453 0 .891-.072 1.306-.192A6.988 6.988 0 0010 19a6.988 6.988 0 005.694-2.192C16.109 16.928 16.547 17 17 17v-2zm-7-4a4 4 0 110-8 4 4 0 010 8z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3">
                                <select className="border rounded px-4 py-2 dark:bg-slate-900 dark:text-white  "
                                    value={carousel}
                                    onChange={e => setcarousel(e.target.value)}>
                                    <option>Carousel</option>
                                    <option>Non-carousel</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <div className="mt-10">
                        {loader ?
                            <button
                                type="button"
                                onClick={save}
                                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Upload your Product
                            </button> :
                            <button className="bg-blue-500 w-full hover:bg-slate-900 dark:hover:bg-blue-900 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline justify-center items-center text-center" type="button">
                                <div className="flex justify-center items-center">
                                    <div className="inline-flex  rounded-full h-8 w-8 border-4 border-blue-50"></div>
                                </div>
                            </button>}

                    </div>
                </form>
            </div>
        )
    }
}
