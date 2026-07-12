import Sidebar from "./components/sidebar/Sidebar";
import MobileSidebar from "./components/sidebar/MobileSidebar";
import HamburgerButton from "./components/sidebar/HamburgerButton";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import useSidebar from "./hooks/useSidebar";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./components/footer/Footer";
import Education from "./sections/Education";
import Certificates from "./sections/Certificates";
import MobileLanguageHint from "./components/ui/MobileLanguageHint";

function App() {
  const sidebar = useSidebar();

  return (
    <div className="flex">
      <MobileLanguageHint />
      <Sidebar />
      <HamburgerButton onClick={sidebar.openSidebar} />
      <MobileSidebar isOpen={sidebar.isOpen} onClose={sidebar.closeSidebar} />
      <main className="flex-1 lg:mr-80">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Education />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
