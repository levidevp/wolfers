import useBuyer from "@/customHooks/useBuyer"
import { useState, useEffect } from 'react';

const Buyers = () => {

   const {
    storeBuyer,
    cancelBuyer,
} =useBuyer()
const [uid, setUid] = useState("");

useEffect(() => {
    const getUid = async () => {
        const storedUid:any = await localStorage.getItem("uid");
        setUid(storedUid);
        console.log(storedUid);

    };
    getUid();
}, []);

  return (
    <div className='flex flex-wrap justify-center w-[100%] dark:bg-slate-950'>
         <table className="min-w-full m-7">
  <thead>
    <tr className="bg-gray-50 dark:bg-slate-900 ">
      <th className="lg:px-6 md:px-2py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
      <th className="lg:px-6 md:px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
      <th className="lg:px-6 md:px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
      <th className="lg:px-6 md:px-2  py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
      <th className="lg:px-6 md:px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
      <th className="lg:px-6 md:px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
      <th className="lg:px-6 md:px-2  py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Button</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-600 dark:bg-slate-950">
  {storeBuyer && storeBuyer.filter((item1:any) => item1.creator && item1.creator.includes(uid)).map((item:any, index:number) => {
    return(
    <tr key={index}>
      <td className="lg:px-6 md:px-2 py-4 whitespace-nowrap text-sm text-gray-500">{index +1}</td>
      <td className="lg:px-6 md:px-2 py-4 whitespace-nowrap text-sm text-gray-500">{item.userName}</td>
      <td className="lg:px-6 md:px-2  py-4 whitespace-nowrap text-sm text-gray-500">{item.userEmail}</td>
      <td className="lg:px-6 md:px-2 py-4 whitespace-nowrap text-sm text-gray-500">{item.title}</td>
      <td className="lg:px-6 md:px-2 py-4 whitespace-nowrap text-sm text-gray-500">${item.price}</td>
      <td className="lg:px-6 md:px-2 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>

      <td className="lg:px-6 md:px-2 py-4 whitespace-nowrap text-sm font-medium">
      <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => cancelBuyer(item)}>Remove</button>

      </td>
    </tr>
    
  )
  })}
    
    </tbody>
    </table>
    </div>
  )
}

export default Buyers