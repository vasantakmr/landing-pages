import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TestCasesTabs() {
  return (
    <Tabs defaultValue="case1" className="w-full">
      <TabsList>
        <TabsTrigger value="case1">Case 1</TabsTrigger>
        <TabsTrigger value="case2">Case 2</TabsTrigger>
      </TabsList>
      <TabsContent value="case1">
        Detailed case 1 with input and output
      </TabsContent>
      <TabsContent value="case2">Detailed case 2 with input and output.</TabsContent>
    </Tabs>
  );
}
