import { useState } from "react";
import Grain from "./components/Grain";
import CustomCursor from "./components/CustomCursor";
import PageLoader from "./components/PageLoader";
import ScrollProgress from "./components/ScrollProgress";
import StatusStrip from "./components/StatusStrip";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MarqueeBand from "./components/MarqueeBand";
import Origin from "./components/Origin";
import Pillars from "./components/Pillars";
import MenuBoard from "./components/MenuBoard";
import StudioNote from "./components/StudioNote";
import Voucher from "./components/Voucher";
import Interlude from "./components/Interlude";
import Voices from "./components/Voices";
import WeeklyFeature from "./components/WeeklyFeature";
import Invitation from "./components/Invitation";
import Footer from "./components/Footer";
import useLenis from "./hooks/useLenis";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  useLenis();

  return (
    <>
      {!loaded && <PageLoader onDone={() => setLoaded(true)} />}
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Grain />
      <CustomCursor />
      <ScrollProgress />
      <StatusStrip />
      <Header />
      <main id="main">
        <Hero />
        <MarqueeBand />
        <Origin />
        <Pillars />
        <MenuBoard />
        <StudioNote />
        <Voucher />
        <Interlude />
        <Voices />
        <WeeklyFeature />
        <Invitation />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Atelier du Midi",
            description:
              "A neighborhood lunch studio built around slow food and open doors.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "14 Wharf Lane",
              addressLocality: "Harbor Quarter",
            },
            telephone: "+31 20 555 0142",
            email: "hello@atelierdumidi.studio",
            servesCuisine: "Contemporary European",
            priceRange: "€€",
          }),
        }}
      />
    </>
  );
};

export default App;
