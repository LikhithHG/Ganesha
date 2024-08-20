import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Events from "./components/Events/Events";
import Donation from "./components/Donation/Donation";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

import "./App.css";




function App() {
  return (
    <>
      <section className="banner-container">
        <Navbar />
        <Banner />
      </section>
      
      <Events />
      <Donation />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
