import React from 'react';

const Learn = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 dark:bg-slate-950">
      <div className="border-l-4 border-r-4 border-black px-10 dark:border-white py-5">
        <h1 className="text-4xl text-center font-bold dark:text-white">About Us</h1>
        <p className="text-lg font-bold mt-4 dark:text-white" >
          High-quality design and interior design. Here you will find original
          furniture ideas and unique products. Look for individual tips and
          orders.
        </p>
      </div>
      <button className="mt-10 bg-gray-700 hover:bg-black hover:dark:bg-slate-200 hover:dark:text-black text-white font-bold py-2 px-4 rounded">
        Learn more
      </button>
    </div>
  );
};

export default Learn;
