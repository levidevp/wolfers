import { useState, useEffect } from 'react';
import Image from 'next/image';
import useCard from '@/customHooks/useCard';

const Post = () => {
  const { storedata,
     price, 
     title,
      toggle,
       update,
       onEditHandler, 
       cancel, 
       setprice, 
       settitle, 
       setdescrition, 
       descrition,
       update1,
       update2,
       toggle1,
       toggle2,
       re,
       } = useCard();


  const [uid, setUid] = useState("");

  useEffect(() => {
    const getUid = async () => {
      const storedUid = await localStorage.getItem("uid");
      setUid(storedUid);
      console.log(storedUid);

    };
    getUid();
  }, []);


  return (
    <div className='flex flex-wrap justify-center dark:bg-slate-900 bg-slate-50 pt-12'>
      
      {storedata && storedata.filter((item1) => item1.creator && item1.creator.includes(uid)).map((item, index) => {
        return (
          <div
            key={index}
            className="shadow-lg dark:shadow-purple-800 dark:hover:bg-purple-800
                shadow-blue-800 rounded-lg pb-4 hover:bg-slate-200  bg-white dark:bg-slate-950 mx-1"
          >
            <img
              className='p-8 m-8 border-2 h-1/2 cursor-pointer border-zinc-100 dark:border-slate-800 hover:border-gray-900 dark:hover:border-gray-100'
              src={item.attachmentURL}
              width={300}
              height={300}
              alt='cards'
            />
            <div className='h-1/2'>

              {re && re.id === item.id && toggle ?
                <div className='justify-between mx-6 flex flex-row pb-2'>
                  <input
                    name="price"
                    placeholder='edit name...'
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    className="block w-full border-b-1 bg-slate-200 foucs:border-none px-3.5 py-2 mr-3 m-1 text-gray-900 dark:text-slate-50 dark:bg-slate-950  placeholder:text-gray-400"
                  />
                  <button className='justify-center' onClick={onEditHandler}>
                    <span className='sr-only'>Edit</span>
                    <Image
                      className='cursor-pointer'
                      src='/done.png'
                      width={30}
                      height={30}
                      alt='cards'
                    />
                  </button>
                </div> : <div className='justify-between mx-6 flex flex-row pt-3'>
                  <h2 className='lg:text-3xl md:text-2xl sm:text-1xl text-zinc-900 font-bold mr-8 ml-8 dark:text-slate-100 hover:dark:text-slate-50'>
                    {item.title}
                  </h2>
                  <button className='justify-center' onClick={() => update(item)} >
                    <span className='sr-only'>Edit</span>
                    <Image
                      className='cursor-pointer'
                      src='/edit.png'
                      width={20}
                      height={20}
                      alt='cards'
                    />
                  </button>

                </div>}

              {re && re.id === item.id && toggle1?
                <div className='justify-between mx-6 flex flex-row pb-2'>
                  <input
                    name="price"
                    placeholder='edit name...'
                    onChange={(e) => setprice(e.target.value)}
                    value={price}
                    className="block w-full border-b-1 foucs:border-none px-3.5 py-2 mr-3 m-1 text-gray-900 dark:text-slate-50
                     dark:bg-slate-950 bg-slate-200  placeholder:text-gray-400"
                  />
                  <button className='justify-center' onClick={onEditHandler}>
                    <span className='sr-only'>Edit</span>
                    <Image
                      className='cursor-pointer'
                      src='/done.png'
                      width={30}
                      height={30}
                      alt='cards'

                    />
                  </button>
                </div> : <div className='justify-between mx-6 flex flex-row pb-2'>
                  <p className='lg:text-2xl md:text-1xl sm:text-1xl text-zinc-800 justify-center ml-6 mr-6 pt-1 dark:text-slate-300 hover:dark:text-slate-50'>
                    ${item.price}
                  </p>
                  <button className='justify-center' onClick={() => update1(item)} >
                    <span className='sr-only'>Edit</span>
                    <Image
                      className='cursor-pointer'
                      src='/edit.png'
                      width={20}
                      height={20}
                      alt='cards'
                    />
                  </button>

                </div>}

              {re && re.id === item.id && toggle2 ?
                <div className='justify-between mx-6 flex flex-row pb-2'>
                  <input
                    name="descrition"
                    placeholder='edit name...'
                    onChange={(e) => setdescrition(e.target.value)}
                    value={descrition}
                    className="block w-full bg-slate-200 border-b-1 foucs:border-none px-3.5 py-2 mr-3 m-1 text-gray-900 dark:text-slate-50 dark:bg-slate-950  placeholder:text-gray-400"
                  />
                  <button className='justify-center' onClick={onEditHandler}>
                    <span className='sr-only'>Edit</span>
                    <Image
                      className='cursor-pointer'
                      src='/done.png'
                      width={30}
                      height={30}
                      alt='cards'

                    />
                  </button>
                </div> : <div className='justify-between mx-6 flex flex-row pb-3'>
                  <p className='lg:text-[1rem] md:text-1xl sm:text-1xl text-zinc-800 justify-center ml-6 mr-6 pt-1 dark:text-slate-300 hover:dark:text-slate-50'>
                    description
                  </p>
                  <button className='justify-center' onClick={() => update2(item)}>
                    <span className='sr-only'>Edit</span>
                    <Image
                      className='cursor-pointer'
                      src='/edit.png'
                      width={20}
                      height={20}
                      alt='cards'
                    />
                  </button>

                </div>}
              <div className='mb-4 mr-6 mt-1 text-end text-lg text-red-600 dark:hover:text-rose-500 cursor-pointer' onClick={() => cancel(item)}>
                <h1>Remove</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
