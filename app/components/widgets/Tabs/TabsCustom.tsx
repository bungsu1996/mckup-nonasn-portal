import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { useTabsLayoutStore } from "~/store/Tabs/TabsLayoutStore";

interface Props {

};

export function TabsCustomV1() {
  const { activeTab, setActiveTab } = useTabsLayoutStore();

  return (
    <React.Fragment>
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-[600px] ">
        <TabsList className="p-6">
          <TabsTrigger value="account" className="px-4 py-4 data-[state=active]:bg-[#17163c] data-[state=active]:text-white">Beranda</TabsTrigger>
          <TabsTrigger value="password" className="px-4 py-4">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </React.Fragment>
  );
}
