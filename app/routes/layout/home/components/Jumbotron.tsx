import { useEffect, useState } from "react";
import bgImage from "~/assets/images/bg-new.jpg";
import { ConfigsLanguange } from "~/lib/config";

export default function JumbotronV1() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className="w-full h-[300px] lg:h-[400px] relative">
      <img src={bgImage} alt="Jumbotron" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {/* <img src={logoImage} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" /> */}
          <span className="text-white text-xs lg:text-lg sm:text-xl font-bold tracking-wide">JAGRITA</span>
        </div>
        <h1 className={`text-white text-center text-base md:text-2xl lg:text-4xl font-bold transition-all duration-500 ease-in-out ${isScrolled ? "opacity-0 translate-y-[-20px]" : "opacity-100 -translate-y-5"}`}>
          {ConfigsLanguange.title_jumbotron}<br />{ConfigsLanguange.title_jumbotron_sub}
        </h1>
        <h1 className={`text-white text-center text-base md:text-2xl lg:text-4xl font-bold transition-all duration-500 ease-in-out mt-4 ${isScrolled ? "opacity-100 -translate-y-10" : "opacity-0 translate-y-[20px]"}`}>
          {ConfigsLanguange.title_jumbotron_welcome} Hamzah...
        </h1>
      </div>
    </div>
  );
}