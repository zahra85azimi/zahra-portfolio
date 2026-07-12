import HeroContent from "../components/hero/HeroContent";
import HeroImage from "../components/hero/HeroImage";

function Hero() {
  return (
    <section
      id="home"
      className="
        overflow-hidden
        min-h-screen
        px-12
        py-12
        bg-gradient-to-br
        from-slate-50
        via-white
        to-sky-50
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
        transition-colors
        duration-500
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          min-h-screen
          flex-col-reverse
          items-center
          justify-evenly
          gap-16
          lg:flex-row
        "
      >
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;
