import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Gallary from "../Gallary/Gallary";
import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const FullPage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Services />
      <Gallary />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
};
export default FullPage;
