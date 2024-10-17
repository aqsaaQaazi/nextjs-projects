import Link from "next/link"

export default function SaleHeader (){
    return(
        <div className="bg-gradient-to-bl from-secondary-mutedBeige to-primary-deepRed py-2 w-full ">
            <h1 className=" font-thin text-neutral-offWhite text-sm text-center">
                Sign up and get 20% off to your first order. 
                <span className="hover:underline transition-all duration-700 px-1 font-semibold"> 
                    <Link href="">
                        Sign Up Now
                    </Link>
                    </span>
            </h1>
        </div>
    )
}