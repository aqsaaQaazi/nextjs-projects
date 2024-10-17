import Hero from "./heroSection";
import Brands from "./Brands";
import NewArrivals from "./NewArrivals";
import ContactUs from "./Footer";

export default function Bundle() {
  return (
    <main className="bg-[#C9BA98]">
       <Hero /> 
       <Brands/>
       <NewArrivals/>
       <ContactUs/>

    </main>
  );
}