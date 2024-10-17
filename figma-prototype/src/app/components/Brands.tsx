
export default function Brands() {
  const Gucci = "/gucci.png";
  const Prada = "/prada.png";
  const Versace = "/versace.png";
  const Zara = "/zara.png";
  const CK = "/calvin-klein.png";
  return (
    <section className="bg-gradient-to-bl from-[#AC9C8D] to-[#73283D] flex flex-wrap justify-center text-white w-full  py-8 my-3">
      <div className="flex justify-evenly items-center w-1/3 sm:w-1/4 lg:w-auto mx-3 mb-4">
        <img src={Gucci} alt="Gucci brand logo" height="36" width="156" />
      </div>

      {/* ---------------- */}
      <div className="flex justify-center items-center w-1/3 sm:w-1/4 lg:w-auto mx-3 mb-4">
        <img src={Prada} alt="prada brand logo" height="32" width="194" />
      </div>

      {/* -------------------------- */}

      <div className="flex justify-center items-center w-1/3 sm:w-1/4 lg:w-auto mx-3 mb-4">
        <img src={Versace} alt="versace brand logo" height="33.16" width="166.48" />
      </div>

      {/* ============================ */}

      <div className="flex justify-center items-center w-1/3 sm:w-1/4 lg:w-auto mx-3 mb-4">
        <img src={CK} alt="CK brand logo" height="33.35" width="206.79" />
      </div>
      {/* -------------------------- */}

      <div className="flex justify-center items-center w-1/3 sm:w-1/4 lg:w-auto mx-3 mb-4">
        <img src={Zara} alt="Zara brand logo" height="38" width="91" />
      </div>
      {/* -------------------------- */}
    </section>
  );
}
