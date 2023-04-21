import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import useCard from "@/customHooks/useCard.ts";



const CarouselComponent = () => {

  const {toid,storedata,user} = useCard();

  return (
    <div className="h-100 bg-cover bg-center" style={{ backgroundImage: 'url(/banner.png)' }}>
      <div className="h-100" >
        <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
          {storedata && storedata.filter((item1) => item1.carousel && item1.carousel.includes("Carousel")).map((item,index) => {
            return (<>
              <div key={index} className="flex items-center justify-center">
                <div className="w-1/2 p-4">
                  <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-red-500  font-bold mb-2">New Products</h2>
                  <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-gray-50 font-bold mb-4">{item.title}</h1>
                  <p className="lg:text-4xl md:text-3xl sm:text-2xl text-gray-50 font-semibold">${item.price}</p>
                  <br />
                  {user &&
                   <button className="relative overflow-hidden px-4 py-2 text-lg font-medium uppercase tracking-wide text-red-500 transition-all duration-500 ease-in-out bg-transparent border-2 border-red-500 rounded-full focus:outline-none" onClick={() => toid(item.id)}>
                   <span className="absolute inset-0 transition-all duration-500 ease-in-out bg-red-500 rounded-full opacity-50 hover:opacity-100" style={{ transform: "translate(-50%, -50%) rotate(45deg)", top: "50%", left: "50%", width: "0", height: "300%" }}></span>
                   Shop now
                 </button>}       
                </div>
                <div className="w-1/2">
                  <img src={item.attachmentURL} alt="fml" width={1000} height={800} layout="reponsive" />
                </div>
              </div>
            </>);
          })}
        </Carousel>
      </div>
    </div>

  );
};

export default CarouselComponent;




