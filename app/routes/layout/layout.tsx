import IconContainer from "~/components/widgets/OverlayHeader";
import type { Route } from "./+types/layout";
import bgImage from "~/assets/images/bg-new.jpg";
import AvatarFotoProfile from "~/components/widgets/FotoProfile";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Beranda" },
    { name: "description", content: "Selamat datang diberanda" },
  ];
}

export default function Layout() {
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
    <div className="min-h-screen">
      {/* HEADER JUMBOTRON */}
      <div className="w-full h-[400px] relative">
        <img src={bgImage} alt="Jumbotron" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <h1 className={`text-white text-center text-4xl font-bold transition-all duration-500 ease-in-out ${isScrolled ? "opacity-0 translate-y-[-20px]" : "opacity-100 translate-y-0"}`}>
            Website Portal Personalia Profile Kepegawaian Non-ASN
          </h1>
          <h1 className={`text-white text-center text-4xl font-bold transition-all duration-500 ease-in-out mt-4 ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"}`}>
            Selamat Datang Hamzah...
          </h1>
        </div>
      </div>
      
      {/* ICON PACK DITENGAH HEADER */}
      <IconContainer />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-6 mt-10">
        {/* KIRI: PROFILE */}
        <AvatarFotoProfile />

        {/* KANAN: ------ */}
        <div className="flex-1">
          <div className="bg-white shadow-lg rounded-lg p-6 relative -mt-3">
            <h2 className="text-2xl font-semibold text-gray-800">Judul Konten</h2>
            <p className="text-gray-600 mt-2">
              Ini adalah konten utama yang berada dalam card dan sedikit menumpuk ke dalam header.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 text-center">
        <p className="text-gray-700">Selamat datang di website kami! Nikmati pengalaman terbaik.</p>
      </div>
    </div>
  );
}
