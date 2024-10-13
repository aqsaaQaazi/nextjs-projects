import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function NewArrivals() {
  const Products = [
    {
      image: "/OrangeShirt.png",
      name: "Striped Shirt",
      price: "$130",
      Rating: 2.9,
    },
    {
      image: "/CheckeredShirt.png",
      name: "Checkered Shirt",
      price: "$180",
      Rating: 3.5,
    },
    {
      image: "/PlainBlackT.png",
      name: "Black T",
      price: "$120",
      Rating: 4.5,
    },
  ];

  return (
    <div className="w-auto h-full border-b-2 ">
      <h1 className="text-4xl font-black text-center py-2 px-8">
        NEW IN STOCK
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center py-10 px-5 ">
        {Products.map((product, index) => {
          const rating = product.Rating;

          return (
            <div key={index} className="bg-white shadow-md rounded-lg hover:scale-105 transition-all">
              <Image
                width={500}
                height={500}
                src={product.image}
                alt={product.name}
                className="w-full object-fit"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`w-3 h-3 ${
                        index < rating ? "text-yellow-400" : "text-gray-200"
                      }`}
                    />
                  ))}{" "}
                  <span className="text-black text-xs ml-1">
                    {product.Rating}
                  </span>
                </div>
                <p className="text-black font-semibold text-lg ">
                  {product.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button 
      className="
      bg-white block text-black 
       font-semibold 
       mx-auto text-lg 
       my-8 px-5 py-2 
       rounded-full 
       hover:bg-gray-300 
       border-2 border-gray-600
        active:bg-gray-600 active:text-white ">
        More Items
      </button>
    </div>
  );
}
