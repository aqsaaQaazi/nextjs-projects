import Link from "next/link"

export default function SaleHeader (){
    return(
        <div className=" bg-black py-2 w-full">
            <h1 className=" font-thin text-white text-sm text-center">
                Sign up and get 20% off to your first order. 
                <span className="underline px-1 font-semibold"> 
                    <Link href="">
                        Sign Up Now
                    </Link>
                    </span>
            </h1>
        </div>
    )
}