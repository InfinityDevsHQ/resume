import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const LevelIndicator = () => {
  return (
    <>
      <Tabs defaultValue="beginner" className="w-full">
        <TabsContent className="text-[#fe7d8b]" value="novice">
          novice
        </TabsContent>
        <TabsContent className="text-[#f68559]" value="beginner">
          beginner
        </TabsContent>
        <TabsContent className="text-[#f9ba44]" value="skillful">
          skillful
        </TabsContent>
        <TabsContent className="text-[#48ba75]" value="experienced">
          experienced
        </TabsContent>
        <TabsContent className="text-[#9ba1fb]" value="advance">
          advance
        </TabsContent>
        <TabsList className="w-full flex h-12 p-0">
          <TabsTrigger
            className="w-[20%] h-12  data-[state=active]:bg-[#fe7d8b] rounded-md"
            value="novice"
          ></TabsTrigger>
          <Separator orientation="vertical" className="h-[60%] bg-black" />
          <TabsTrigger
            className="w-[20%] h-12  data-[state=active]:bg-[#f68559] rounded-md"
            value="beginner"
          ></TabsTrigger>
          <Separator orientation="vertical" className="h-[60%] bg-black" />
          <TabsTrigger
            className="w-[20%] h-12  data-[state=active]:bg-[#f9ba44] rounded-md"
            value="skillful"
          ></TabsTrigger>
          <Separator orientation="vertical" className="h-[60%] bg-black" />
          <TabsTrigger
            className="w-[20%] h-12  data-[state=active]:bg-[#48ba75] rounded-md"
            value="experienced"
          ></TabsTrigger>
          <Separator orientation="vertical" className="h-[60%] bg-black" />
          <TabsTrigger
            className="w-[20%] h-12  data-[state=active]:bg-[#9ba1fb] rounded-md"
            value="advance"
          ></TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
};

export default LevelIndicator;
