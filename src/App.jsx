import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Events from "./components/Events/Events";
import Donation from "./components/Donation/Donation";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";

import "./App.css";



function App() {
  return (
    <>
      <section className="banner-container">
        <Navbar />
        <Banner />
      </section>

      <section id="events" className="events-container">
        <Events />
      </section>

      <section id="donations" className="donation-container">
        <Donation />
      </section>

      <section id="aboutUs" className="AboutUs-container">
        <AboutUs />
      </section>
      
      <section id="contactUs" className="ContactUs-container">
        <ContactUs />
      </section>
    </>
  );
}

export default App;
