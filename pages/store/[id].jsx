import { useRouter } from 'next/router';
import Image from "next/image";
import { fetchData } from "../../store/DataSlice";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import useCard from '@/customHooks/useCard'

const Store = () => {

  const {storedata,quantity,handleQuantityChange,Cart} = useCard();
  const router = useRouter();




  return (
    <div className=" flex flex-wrap  px-4 py-8 md:p-16 dark:bg-slate-950 h-[100vh]">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {storedata.map((item, index) => {
        if (item.id === router.query.id) {
          return (
          <>
            <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 items-center justify-center " key={index}>
              <img
                src={item.attachmentURL}
                alt="Product Image"
                width={1000}
                height={800}
                layout="responsive"
                className="rounded-md shadow-lg border-2 text-gray-600 dark:bg-slate-900"
              />
            </div>
            <div className="w-full md:w-1/2 pl-4">
              <br />
              <h2 className="text-2xl md:text-2xl font-bold text-red-500 mb-2 dark:text-blue-700">Name</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 dark:text-white">{item.title}</h1>
              <p className="text-lg md:text-3xl font-semibold text-gray-900 mb-4 dark:text-blue-700">${item.price}</p>
              <p className="text-lg text-gray-600 mb-4 dark:text-slate-400">category: <span className="font-semibold text-gray-900 dark:text-white">{item.gender}</span></p>
              <div className="mb-4 w-1/5 ">
              <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2" htmlFor="quantity">
                              Quantity
                            </label>

                            <input
                              className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none dark:bg-slate-900 dark:text-white focus:shadow-outline"
                              id="quantity"
                              type="number"
                              min="1"
                              max="10"
                              value={quantity}
                              onChange={handleQuantityChange}
                            />
                          </div>
              <p className="text-md  text-gray-700 mb-4 dark:text-slate-400">{item.descrition}.</p>
             
              <div>
                <button className="relative overflow-hidden px-4 py-2 text-lg font-medium uppercase tracking-wide dark:text-blue-700 text-red-500 transition-all duration-500 ease-in-out bg-transparent border-2 border-red-500 dark:border-blue-700 rounded-full focus:outline-none" onClick={() => Cart(item)}>
                  <span className="absolute inset-0 transition-all duration-500 ease-in-out dark:text-blue-700 bg-red-500 rounded-full opacity-50 hover:opacity-100" style={{ transform: "translate(-50%, -50%) rotate(45deg)", top: "50%", left: "50%", width: "0", height: "300%" }}></span>
                  Add to Cart
                </button>
              </div>
            </div>
            <br />
            <br />
            <br />
          </>)
        }
      })}
    </div>

  )
};

export default Store;
