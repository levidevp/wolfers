import useCard from '@/customHooks/useCard';
import Image from 'next/image';


const StoreCard = () => {

  const {
    toid,
    handleQuantityChange,
    handleClose,
    togglePopover,
    setserachtext,
    setselects,
    quantity,
    isOpen,
    storedata,
    selects,
    serachtext,
    currentItem,
    loader,
    user,

    Cart,
  } = useCard()


  return (
    <div className='dark:bg-slate-950  h-[100vh]'>           
      <div>
        <br />
        <h1 className='text-6xl justify-center flex dark:text-slate-50'>Shop Now</h1>
      </div>
      <br />
      <div className="flex space-x-4 justify-between mx-6">
        <input type="text" className="border rounded px-4 py-2 dark:bg-slate-900 dark:text-white" placeholder="Search..." onChange={(e) => setserachtext(e.target.value)} />
        <select className="border rounded pr-4 py-2 dark:bg-slate-900 dark:text-white " onChange={(e) => setselects(e.target.value)} value={selects}>
          <option value="">All items</option>
          <option>Men</option>
          <option>Women</option>
          <option>Kids</option>
        </select>
      </div>
      <div className='flex flex-wrap justify-center dark:bg-slate-950'>
        {storedata && storedata.filter((item1) => item1.gender && item1.gender.includes(selects)).filter((item1) => item1.gender && item1.title.includes(serachtext)).map((item, index) => {
          return (
            <>
              <div key={index} className={`shadow-lg dark:shadow-purple-800 dark:hover:bg-purple-800 hover:bg-slate-200 shadow-blue-800 rounded-lg  pb-4  bg-white dark:bg-slate-950 m-2  `} >
                <img
                  onClick={() => toid(item.id)}
                  className='p-8 m-8 items-center h-[60%] border-2 cursor-pointer border-zinc-100 dark:border-slate-800 hover:border-gray-900 dark:hover:border-gray-100'
                  src={item.attachmentURL}
                  width={400}
                  height={400}
                  alt='cards'
                />
                <div className='h-1/3 '>
                  <h2 className='lg:text-3xl md:text-2xl sm:text-1xl text-zinc-900 font-bold mr-8 ml-8 dark:text-slate-100 cursor-pointer dark:hover:text-blue-700' onClick={() => toid(item.id)}>{item.title}</h2>
                  <div className='justify-between ml-6 mr-6 flex flex-row'>
                    <p className='lg:text-2xl md:text-1xl sm:text-1xl text-zinc-800 justify-center pt-1 dark:text-slate-300 cursor-pointer dark:hover:text-blue-800' onClick={() => toid(item.id)}>${item.price}</p>
                    {user && user.emailVerified &&
                      <button onClick={() => togglePopover(item)} className='justify-center border-gray-900'>
                        <span className="sr-only">View Cart</span>
                        <Image
                          className='p-3 border-2 cursor-pointer border-zinc-100 hover:border-gray-900 dark:hover:border-gray-100 dark:border-slate-800'
                          src='/cart1.png'
                          width={60}
                          height={60}
                          alt='cards'
                        />
                      </button>}
                  </div>
                  {isOpen && currentItem && currentItem.id === item.id && (
                    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 ">
                      <div className="bg-white  border-2 border-gray-400 rounded-lg p-8 relative max-w-xl  h-70 w-[500px] backdrop-filter backdrop-blur-lg dark:bg-slate-900 dark:text-white">
                        <button
                          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 focus:outline-none"
                          onClick={handleClose}
                        >
                          <span className="sr-only">View Cart</span>
                          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                        <div className='flex justify-between'>
                          <div className='w-1/2'>
                            <h2 className="  text-lg  ">Name</h2>
                            <h2 className="  text-3xl font-bold pt-2 ">{item.title}</h2>
                          </div>
                          <div className="mb-4 w-1/4 ">
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
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-gray-700 dark:text-gray-300 font-bold">Price:</p>
                          <p className="text-gray-700 dark:text-gray-300">{item.price}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-gray-700 font-bold dark:text-gray-300">Total:</p>
                          <p className="text-gray-700 font-bold dark:text-white">${item.price * quantity}</p>
                        </div>
                        {loader ?
                          <div className="flex justify-end mt-5">
                            <button className="bg-gray-900 hover:bg-black text-white dark:text-slate-950 dark:bg-slate-300 hover:dark:bg-slate-50 font-bold py-2 px-4 rounded" onClick={() => Cart(item)}>
                              Add to Cart
                            </button>
                          </div> :
                          <div className="flex justify-end mt-5">
                            <div className="flex justify-center items-center">
                              <div className="inline-flex  rounded-full h-8 w-8 border-4 border-blue-50"></div>
                            </div>
                          </div>}


                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )
        })}
      </div>

    </div>
  );
};

export default StoreCard;