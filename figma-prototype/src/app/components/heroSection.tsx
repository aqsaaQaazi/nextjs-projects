
export default function Hero() {
  return (
    <main

    className="w-full h-screen bg-cover bg-left sm:bg-right-center bg-no-repeat  flex flex-col justify-center"

      style={{
        backgroundImage: `url('/hero.png')`,

        backgroundPosition: "right center",

        width: "100%",
        height: "100vh",
      }}>

 
      <div className="text-left pl-10 ml-10 w-full px-6 sm:px-8 md:w-2/3 lg:w-1/2 xl:w-1/3 sm:h-3/4 sm:bg-[f2f0f1] z-50">

      {/*  text-left */}
        <h1 className="text-3xl  break-words text-primary-darkBrown pt-16 sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>
        <p className="font-light text-text-dark text-opacity-60 text-sm sm:text-base md:text-lg mt-4">
          Browse through our diverse collection of clothing and find the perfect
          outfit for you. Explore now and discover the latest trends in fashion.
        </p>

        <button
          type="button"
          title="shop"
          className="text-neutral-offWhite font-light text-sm sm:text-md px-6 sm:px-8 py-2 sm:py-3 bg-primary-deepRed rounded-full cursor-pointer mt-6 active:bg-hover-accent hover:text-neutral-offWhite  hover:font-semibold hover:scale-105 transition-all duration-200  active:opacity-50 "
        >
          Shop Now
        </button>
      </div>
    </main>
  );
}
