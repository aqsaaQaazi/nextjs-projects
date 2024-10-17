import { FaLinkedinIn, FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function ContactUs() {
  return (
    // parent
    <footer>
      {/* child one  */}
      {/* newletter section */}
      <div
        className="
        mx-4 md:mx-7  
         z-10  // Ensure this is on top
          relative
          mt-5 md:mt-5
          py-6 px-4 md:px-8
          bg-primary-darkBrown text-neutral-offWhite
          rounded-2xl
          flex flex-col 
          lg:flex-row 
          lg:items-center justify-between
          -mb-24"
      >
        <h1
          className="text-left 
          w-3/4 md:w-2/4 
          lg:w-2/4 text-xl 
          md:text-2xl 
          font-light mt-2 
          mb-4"
        >
          <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
            GET FASHION UPDATES DELIVERED TO YOUR INBOX!
          </span>
        </h1>

        <div className="w-full lg:w-auto flex items-center bg-neutral-offWhite rounded-md p-1">
          <div className="relative w-full ">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-darkBrown"
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
              className="pl-10 py-3 w-full outline-none text-neutral-l  rounded-md bg-neutral-offWhite pr-0"
            />
          </div>

          <button className="bg-primary-deepRed transition-all text-neutral-offWhite w-2/6 py-4 rounded-md hover:scale-105 mr-1 active:bg-hover-accent font-semibold text-lg md:px-6">
            Reach Out
          </button>
        </div>
      </div>

      <div      className="bg-neutral-lightGrey  pt-32">
        <div 
        className="border-b-2 border-secondary-mutedBeige mx-3">
          <div
            className="container bg-neutral-lightGrey text-primary-darkBrown mx-auto 
          px-10 grid grid-cols-1 
          md:grid-cols-5 gap-10 py-12  "
          >
            <div className="md:col-span-2">
              <h3 className="text-3xl font-black mb-4">SHOP.CO</h3>
              <p className="text-text-dark mb-4 text-left">
                We have clothes that suit your style and which you’re proud to
                wear. From women to men.
              </p>

              <div className="flex space-x-4 ">
                <a
                  href="https://pk.linkedin.com/in/aqsaa-qaazi-7b69982b4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className=" flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-deepRed hover:text-neutral-offWhite text-primary-darkBrown border border-primary-darkBrown cursor-pointer active:bg-hover-accent transition-all ">
                    <FaLinkedinIn />

                    
                  </div>
                </a>

                {/* ----------------- */}

                <a 
                href="mailto:aqsaakqaazi@gmail.com" 
                target="_blank" 
                rel="noreferrer noopener">
                    <div className=" flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-deepRed hover:text-neutral-offWhite text-primary-darkBrown border border-primary-darkBrown cursor-pointer active:bg-hover-accent transition-all ">
                      <FaEnvelope />

                    

                    </div>
                </a>

                {/* ---------------------- */}

                <a 
                href="https://github.com/aqsaaQaazi" 
                target="_blank" 
                rel="noopener noreferrer">
                  <div className=" flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-deepRed hover:text-neutral-offWhite text-primary-darkBrown border border-primary-darkBrown cursor-pointer active:bg-hover-accent transition-all ">
                  <FaGithub />
                  </div>
                </a>

                {/* ------------------------ */}

              <a 
              href="wa.link/jw9r22" 
              target="_blank" 
              rel="noopener norefferer ">
                <div 
                className=" flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-deepRed hover:text-neutral-offWhite text-primary-darkBrown border border-primary-darkBrown cursor-pointer active:bg-hover-accent transition-all ">
                    <FaWhatsapp />

                    
                </div>
              </a>
            </div>
          </div>

            <div>
              <h4 className="text-xl tracking-wider font-medium gap-1 text-primary-darkBrown mb-4">
                COMPANY
              </h4>
              <ul>
                <li className="mb-2 hover:text-black  text-gray-400">
                  <Link href="#">About</Link>
                </li>
                <li className="mb-2 hover:text-black text-gray-400">
                  <Link href="#">Features</Link>
                </li>
                <li className="mb-2 hover:text-black text-gray-400">
                  <Link href="#">Works</Link>
                </li>
                <li className="mb-2 hover:text-black text-gray-400">
                  <Link href="#">Career</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl tracking-wider font-medium gap-1 text-primary-darkBrown mb-4">
                HELP
              </h4>
              <ul>
                <li className="mb-2 hover:text-black text-gray-400">
                  <a href="#">Customer Support</a>
                </li>
                <li className="mb-2 hover:text-black text-gray-400">
                  <a href="#">Delivery Details</a>
                </li>
                <li className="mb-2 hover:text-black text-gray-400">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="mb-2 hover:text-black text-gray-400">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl tracking-wider font-medium gap-1 text-primary-darkBrown mb-4">
                RESOURCES
              </h4>
              <ul>
                <li className="mb-2 hover:text-black text-gray-400">
                  <a href="#">Free eBooks</a>
                </li>
                <li className="mb-2 hover:text-black text-gray-400">
                  <a href="#">Development Tutorial</a>
                </li>
                <li className="mb-2 hover:text-black text-gray-400">
                  <a href="#">How to - Blog</a>
                </li>
                <li className="mb-2 hover:text-black text-gray-400">
                  <a href="#">Youtube Playlist</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
