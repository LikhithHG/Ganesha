import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Events from "./components/Events/Events";
import Donation from "./components/Donation/Donation";

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
      
    </>
  );
}

export default App;
