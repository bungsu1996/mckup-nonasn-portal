import { create } from "zustand";

interface TabsStore {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const useTabsLayoutStore = create<TabsStore>((set) => ({
  activeTab: "beranda",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
