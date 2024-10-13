export default function Hero() {
    return (
        <main
            style={{
                backgroundImage: `url('/hero.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
            }}
            className="w-full h-screen"
        >
            
            <div className="items-left pl-10 ml-10 w-full px-6 sm:px-8 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <h1 className="text-3xl  break-words pt-16 sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                    FIND CLOTHES THAT MATCH YOUR STYLE
                </h1>
                <p className="font-light text-black text-opacity-60 text-sm sm:text-base md:text-lg mt-4">
                    Browse through our diverse collection of clothing and find the perfect outfit for you. Explore now and discover the latest trends in fashion.
                </p>

                <button
                    type="button"
                    title="shop"
                    className="text-white font-light text-sm sm:text-md px-6 sm:px-8 py-2 sm:py-3 bg-black rounded-full cursor-pointer mt-6 hover:font-semibold hover:scale-105 transition-all duration-200  active:opacity-50 hover:text-white"
                >
                    Shop Now
                </button>

                
                

            </div>

            
        </main>
    );
}

