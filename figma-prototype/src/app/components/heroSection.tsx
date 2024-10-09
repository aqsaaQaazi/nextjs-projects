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
            className="h-4/5 w-full flex flex-col justify-center items-center"
        >
            {/* content */}
            <div className="justify-start text-left break-words w-full md:w-2/3 lg:w-1/3 px-4 md:px-0 lg:-ml-80">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-1">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="font-light text-black text-opacity-60 mt-2 text-sm md:text-base lg:text-lg">
                    Browse through our diverse collection of clothing and find the perfect outfit for you. Explore now and discover the latest trends in fashion.
                </p>

                <button
                    type="button"
                    title="shop"
                    className="text-white font-light text-sm md:text-md lg:text-lg px-6 md:px-7 lg:px-9 py-2 md:py-3 bg-black rounded-full cursor-pointer mt-5"
                >
                    Shop Now
                </button>
            </div>
            <div></div>
        </main>
    );
}