import { Outlet } from "react-router";
import type { Route } from "./+types/HomeLayout";
import JumbotronV1 from "~/routes/layout/home/components/Jumbotron";
import FooterParent from "~/components/footer/FooterParent";
import AvatarFotoProfile from "~/components/widgets/FotoProfile";
import { BreadcrumbCustomV1 } from "~/components/widgets/Breadcrumbs/BreadcrumbCustom";
import { AuthProvider, useAuth } from "~/lib/auth/AuthProvider";
import IconContainer from "./components/OverlayHeader";
import ButtonMenuGroup from "./components/ButtonMenuGroup";
import MenuTabTopV1 from "./components/MenuTabTop";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "JAGRITA" },
    { name: "description", content: "Selamat datang diberanda" },
  ];
}

function HomeLayoutContent() {
  const { user } = useAuth();

  const breadcrumb_data = [
    { title: 'beranda', link: "/" },
  ];

  const itemsButton = [
    { title: 'Beranda', link: '/' },
    { title: 'Profile', link: '/profil' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <JumbotronV1 />
      <IconContainer />
      <main className="flex-1">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-6 mt-10">
          {/* KIRI: PROFILE */}
          <AvatarFotoProfile />

          {/* KANAN: ------ */}
          <div className="w-full md:flex-1 overflow-hidden">
            <div className="relative">
              <MenuTabTopV1 />
            </div>
          </div>
        </div>
      </main>
      <div className="h-20"></div>
      <FooterParent />
    </div>
  );
}

export default function HomeLayout() {
  return (
    // AUTH MASIH BELUM JADI
    // <AuthProvider>
      <HomeLayoutContent />
    // </AuthProvider>
  );
}


            {/* <div className="relative -mt-3 mb-2">
              <BreadcrumbCustomV1 
                classLinkCustom="text-xs text-white hover:text-gray-500 transition-all duration-300 ease-in-out" 
                classCurrentPageCustom="text-white text-xs"
                dataBreadcrumbs={breadcrumb_data}
              />
            </div> */}

            
            {/* <div className="relative bg-white shadow-lg rounded-lg p-3">
              <MenuTabTopV1 />
              <p>Home</p>
              <Outlet />
            </div> */}