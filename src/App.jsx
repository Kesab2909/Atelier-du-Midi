import Grain from "./components/Grain";
import StatusStrip from "./components/StatusStrip";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MarqueeBand from "./components/MarqueeBand";
import Origin from "./components/Origin";
import Pillars from "./components/Pillars";
import MenuBoard from "./components/MenuBoard";
import Voucher from "./components/Voucher";
import Interlude from "./components/Interlude";
import Voices from "./components/Voices";
import WeeklyFeature from "./components/WeeklyFeature";
import Invitation from "./components/Invitation";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Grain />
    <StatusStrip />
    <Header />
    <main>
      <Hero />
      <MarqueeBand />
      <Origin />
      <Pillars />
      <MenuBoard />
      <Voucher />
      <Interlude />
      <Voices />
      <WeeklyFeature />
      <Invitation />
    </main>
    <Footer />
  </>
);

export default App;
