
export default function Brands() {
  const Gucci = "/gucci.png";
  const Prada = "/prada.png";
  const Versace = "/versace.png";
  const Zara = "/zara.png";
  const CK = "/calvin-klein.png";
  return (
    <section className="bg-black flex justify-evenly w-full text-white py-8 my-3">
      <div className="mx-3 ml-6">
        <img src={Gucci} alt="Gucci brand logo" height="36" width="156" />
      </div>

      {/* ---------------- */}
      <div className="mx-3">
        <img src={Prada} alt="prada brand logo" height="32" width="194" />
      </div>

      {/* -------------------------- */}

      <div className="mx-3">
        <img src={Versace} alt="versace brand logo" height="33.16" width="166.48" />
      </div>

      {/* ============================ */}

      <div className="mx-3">
        <img src={CK} alt="CK brand logo" height="33.35" width="206.79" />
      </div>
      {/* -------------------------- */}

      <div className=" mr-6 mx-3">
        <img src={Zara} alt="Zara brand logo" height="38" width="91" />
      </div>
      {/* -------------------------- */}
    </section>
  );
}
