import { FaLinkedinIn, FaTwitter, FaInstagram,  FaGithub } from "react-icons/fa";


export default function ContactUs() {
  return (
    // parent
    <footer>
      {/* child one  */}
      {/* newletter section */}


      <div
        className="
          mx-4 md:mx-7 
          z-100 
          my-10 md:my-16 
          py-6 px-4 md:px-8
        bg-black  text-white 
          rounded-2xl
          flex flex-col 
          lg:flex-row 
          lg:items-center justify-between "
      >
        <h1 
          className="text-left 
          w-full md:w-3/4 
          lg:w-2/4 text-xl 
          md:text-2xl 
          font-light mt-2 
          z-10 mb-4">
         <span 
         className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
            GET FASHION UPDATES DELIVERED TO YOUR INBOX!
          </span>
        </h1>
        <div className="w-full lg:w-auto flex items-center bg-white rounded-md p-1">
          <div className="relative w-full">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-width="1"
                d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
              />
            </svg>

            
            <input
              type="email"
              placeholder="Enter your email address"
              className="pl-10 py-3 w-full outline-none text-gray-700 rounded-md pr-0"
            />
          </div>

          <button className="bg-black transition-all text-white w-2/5 py-4 rounded-md hover:scale-105 mr-1 active:bg-zinc-800 font-semibold text-lg">
            Reach Out
          </button>
        </div>
      </div>

      {/* main foote eg child 2 */}
      <div 
        className="container bg-zinc-100 text-gray-800 mx-auto 
        px-10 grid grid-cols-1 
        md:grid-cols-5 gap-10 py-12">


        {/* Column 1: Shop Info */}
        <div className="md:col-span-2">
          <h3 className="text-3xl font-black mb-4">SHOP.CO</h3>
          <p className="text-gray-500 mb-4 text-left">
          We have clothes that suit your style and which you’re proud to wear. From women to men. 
          </p>
          

          <div className="flex space-x-4 ">
            <div  
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black hover:text-white text-black border border-black cursor-pointer active:bg-zinc-700 transition-all " >
               <FaLinkedinIn/>
            </div  >
            {/* ----------------- */}
            <div 
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black hover:text-white text-black border border-black cursor-pointer active:bg-zinc-700 transition-all "
            >
              <FaTwitter/>
            </div>
            {/* ----------------- */}
            <div 
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black hover:text-white text-black border border-black cursor-pointer active:bg-zinc-700 transition-all "
            >
              <FaInstagram />
            </div>
            {/* ---------------------- */}
            <div
               className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black hover:text-white text-black border border-black cursor-pointer active:bg-zinc-700 transition-all "
            >
              <FaGithub />
            </div>
          </div>
        </div>

        
        <div>
          <h4 className="text-xl tracking-wider font-medium gap-1 text-black mb-4">COMPANY</h4>
          <ul>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">About</a>
            </li>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">Features</a>
            </li>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">Works</a>
            </li>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">Career</a>
            </li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-xl tracking-wider font-medium gap-1 text-black mb-4">HELP</h4>
          <ul>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">Customer Support</a>
            </li>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">Delivery Details</a>
            </li>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-xl tracking-wider font-medium gap-1 text-black mb-4">RESOURCES</h4>
          <ul>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">Free eBooks</a>
            </li>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">Development Tutorial</a>
            </li>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">How to - Blog</a>
            </li>
            <li className="mb-2 hover:text-gray-400">
              <a href="#">Youtube Playlist</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
