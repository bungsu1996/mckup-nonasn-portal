import React, { useState } from "react";
import InformasiDiriTab from "./tabs/InformasiDiri";
import DailyWorkActivity from "./tabs/DailyWorkActivity";
import BerandaTabs from "./tabs/Beranda";
import ListSdmNonAsn from "./tabs/ListSdmNonAsn";
import ListWorkPosition from "./tabs/ListWorkPosition";

export default function MenuTabTopV1() {
  const [active, setActive] = useState("beranda");

  const tabs = [
    {
      label: "Beranda",
      code: 'beranda',
      content: <BerandaTabs />,
    },
    {
      label: "Data Diri",
      code: 'self_',
      content: <InformasiDiriTab />,
    },
    {
      label: "Aktivitas Harian Kerja",
      code: 'daily_work',
      content: <DailyWorkActivity />,
    },
    {
      label: "Daftar SDM Non-ASN",
      code: 'list_sdm',
      content: <ListSdmNonAsn />,
    },
    {
      label: "Daftar Jabatan",
      code: 'list_work_position',
      content: <ListWorkPosition />,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* TITLE TRIGGER AREA TABS */}
      <div className="bg-white shadow-lg rounded-lg p-2 w-full mb-4">
        <div className="flex flex-wrap bg-[#17163c] p-1 rounded-lg shadow-lg max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActive(tab.code)}
              className={`px-5 py-2 m-1 rounded-md text-xs lg:text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap
                ${
                  active === tab.code
                    ? "bg-white text-[#17163c] shadow"
                    : "text-white hover:bg-white/10 hover:cursor-pointer"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* KONTEN AREA TABS */}
      <div className="bg-white shadow-lg rounded-lg p-2 w-full">
        <div className="w-full bg-white p-2 transition-all duration-300 text-[#17163c]">
          {tabs.find((tab) => tab.code === active)?.content}
        </div>
      </div>
    </div>
  );
};
