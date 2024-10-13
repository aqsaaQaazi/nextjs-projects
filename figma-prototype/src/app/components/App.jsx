import Hero from "./heroSection";
import Brands from "./Brands";
import NewArrivals from "./NewArrivals";
import ContactUs from "./Contact";

export default function Bundle() {
  return (
    <main>
       <Hero /> 
       <Brands/>
       <NewArrivals/>
       <ContactUs/>

    </main>
  );
}