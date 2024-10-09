import Link from "next/link"

export default function Navbar(){
    return(
        <div className="absolute top-0 right-0 left-0 bg-blue-400 bg-opacity-70 hover:bg-opacity-80  dark:bg-blue-600  z-50 px-3 py-5">
            {/* logo */}

            <div>
                <img src="url('https://th.bing.com/th?id=OIP.jC88DAWaIv8yU3QCpT7QIgHaEQ&w=329&h=189&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2')" alt="" />
            </div>
         
        </div>
    )
}