import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function NewArrivals() {
  const Products = [
    {
      image: "/OrangeShirt.png",
      name: "Striped T-Shirt",
      price: "$130",
      Rating: 4.5,
    },
    {
      image: "/CheckeredShirt.png",
      name: "Checkered Shirt",
      price: "$180",
      Rating: 3.5,
    },
    {
      image: "/PlainBlackT.png",
      name: "Plain Black T",
      price: "$120",
      Rating: 4.5,
    },
    {
        image: "/jeans.png",
        name: "Fitted Jeans",
        price: "$240",
        Rating: 3.9,
      },
      {
        image: "/GreenStripedShirt.png",
        name: "Striped Shirt (Olive)",
        price: "$212",
        Rating: 4.0,
      },
      {
        image: "/TheCourageOrangeT.png",
        name: "The Courage Official T-s",
        price: "$521",
        Rating: 5.0,
      },
      {
        image: "/Shorts.png",
        name: "Bermuda Shorts",
        price: "$80",
        Rating: 3.0,
      },
      {
        image: "/JeansBlack.png",
        name: "Fitted Jeans (Black)",
        price: "$130",
        Rating: 2.9,
      },
  ];

  return (
    <div className="w-full h-full border-b-2 border-secondary-mutedBeige">
      <h1 className="text-6xl font-black text-center py-2 px-8 text-primary-darkBrown">
        NEW IN STOCK
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center py-10 px-4">
        {Products.map((product, index) => {
          const rating = product.Rating;

          return (
            <div key={index} className="bg-secondary-softSand shadow-sm rounded-lg hover:scale-105 duration-300 hover:shadow-hover-buttonBg hover:shadow-xl shado transition-all">
              <Image
                width={500}
                height={500}
                src={product.image}
                alt={product.name}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1 text-primary-darkBrown">{product.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`w-3 h-3 ${
                        index < rating ? "text-yellow-400" : "text-neutral-lightGrey"
                      }`}
                    />
                  ))}{" "}
                  <span className="text-primary-darkBrown text-xs ml-1">
                    {product.Rating}
                  </span>
                </div>
                <p className="text-primary-darkBrown font-semibold text-lg ">
                  {product.price}
                </p>
                
              </div>
              
            </div>
            
          );
          
        })}
        <button 
      className="
      bg-primary-deepRed text-white block  
       font-semibold 
       mx-auto text-lg 
       my-8 px-5 py-2 
       rounded-md 
       hover:bg-hover-buttonBg 
       border-2 border-primary-darkBrown
       active:bg-secondary-softSand transition-colors duration-200">
        More Items
      </button>
      </div>
      
    </div>
  );
}
