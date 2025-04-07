import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { useTabsLayoutStore } from "~/store/Tabs/TabsLayoutStore";

interface itemTabsI {
  tabsTriggerValue: string;
  tabsTriggerTitle: string;
}
interface itemContentTabsI {
  tabsContent?: React.ReactNode;
}
interface Props {
  tabsTrigger?: Array<itemTabsI>;
  tabsContent?: Array<itemContentTabsI>;
};

export function TabsCustomV1({ tabsTrigger, tabsContent }: Props) {
  const { activeTab, setActiveTab } = useTabsLayoutStore();

  return (
    <React.Fragment>
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="p-6">
          {
            tabsTrigger && tabsTrigger.length ? tabsTrigger.map((x, i) => (
              <TabsTrigger key={i} value={x.tabsTriggerValue} className={`px-4 py-4 data-[state=active]:bg-[#17163c] data-[state=active]:text-white hover:bg-gray-50 transition-all duration-300 ease-in-out`}>{x.tabsTriggerTitle}</TabsTrigger>
            )) : null
          }
        </TabsList>
        {
          (tabsTrigger && tabsTrigger.length) && (tabsContent && tabsContent.length) ? tabsContent.map((x, i) => (
            <TabsContent key={i} value={tabsTrigger[i].tabsTriggerValue} className="px-4 py-6">{x.tabsContent}</TabsContent>
          )) : null
        }
      </Tabs>
    </React.Fragment>
  );
}
