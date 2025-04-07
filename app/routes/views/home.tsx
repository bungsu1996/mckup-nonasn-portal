import IconContainer from "~/components/widgets/OverlayHeader";
import type { Route } from "./+types/";
import bgImage from "~/assets/images/bg-new.jpg";
import { ConfigsLanguange } from "~/lib/config";
import AvatarFotoProfile from "~/components/widgets/FotoProfile";
import React, { useEffect, useState } from "react";
import { BreadcrumbCustomV1 } from "~/components/widgets/Breadcrumbs/BreadcrumbCustom";
import { TabsCustomV1 } from "~/components/widgets/Tabs/TabsCustom";
import { useTabsLayoutStore } from "~/store/Tabs/TabsLayoutStore";
import TabsHomeBeranda from "./components/tabsHomeComp/TabsBeranda";
import TabsHomeProfile from "./components/tabsHomeComp/TabsProfile";
import FooterParent from "~/components/footer/FooterParent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "JAGRITA" },
    { name: "description", content: "Selamat datang diberanda" },
  ];
}

type TabTriggerV1 = {
  tabsTriggerValue: string;
  tabsTriggerTitle: string;
};
type TabContentV1 = {
  tabsContent: React.ReactNode;
};

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeTab = useTabsLayoutStore((state) => state.activeTab);
  const breadcrumb_data = [
    { title: activeTab, link: "/" },
  ];
  const [itemsTabsV1, setItemTabsV1] = useState<TabTriggerV1[]>([]);
  const [itemTabsContentV1, setItemTabsContentV1] = useState<TabContentV1[]>([]);
  
  // HANDLE VARIASI ANIMASI SCROLL UNTUK MERUBAH TEKS HEADER JUMBOTRON
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

  useEffect(() => {
    // console.log(import.meta.env.VITE_API_URL, "testing ENV")
    const xItemsTab = [
      { tabsTriggerValue: 'beranda', tabsTriggerTitle: 'Beranda', },
      { tabsTriggerValue: 'profile', tabsTriggerTitle: 'Profile', },
    ];
    setItemTabsV1(xItemsTab);
    const xItemTabTrigger = [
      { tabsContent: <TabsHomeBeranda /> },
      { tabsContent: <TabsHomeProfile /> },
      
    ];
    setItemTabsContentV1(xItemTabTrigger);
  }, []);

  return (
    <div className="min-h-screen">
      {/* HEADER JUMBOTRON */}
      
      
      {/* ICON PACK DITENGAH HEADER */}
      <IconContainer />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-6 mt-10">
        {/* KIRI: PROFILE */}
        <AvatarFotoProfile />

        {/* KANAN: ------ */}
        <div className="w-full md:flex-1">
          <div className="relative -mt-3 mb-2">
            <BreadcrumbCustomV1 
              classLinkCustom="text-xs text-white hover:text-gray-500 transition-all duration-300 ease-in-out" 
              classCurrentPageCustom="text-white text-xs"
              dataBreadcrumbs={breadcrumb_data}
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg relative">
            <TabsCustomV1 tabsTrigger={itemsTabsV1} tabsContent={itemTabsContentV1} />
            
            {/* <h2 className="text-2xl font-semibold text-gray-800">JAGRITA</h2>
            <p className="text-gray-600 mt-2">
              Ini adalah konten utama yang berada dalam card dan sedikit menumpuk ke dalam header.
            </p> */}
          </div>
        </div>
      </div>

      <div className="p-6 text-center">
        <p className="text-gray-700">Selamat datang di website kami! Nikmati pengalaman terbaik.</p>
      </div>
      <FooterParent />
    </div>
  );
}
