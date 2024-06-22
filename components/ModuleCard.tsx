import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type ModuleCard = {
  name: string;
  description: string;
  chapters: number;
};

export function ModuleCard({ name, description, chapters }: ModuleCard) {
  return (
    <div className="inline-block p-2">
      {/* <div className="w-72 h-60 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div> */}
      {/* <Link href="/learn"> */}
      <Card className="w-74 md:w-60 h-74 max-w-xs border-slate text-black dark:bg-slate-900 dark:text-white overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
        <CardHeader>
          <img className="w-full h-24 cover mb-2" src="/intro2.svg" alt="" />
          <CardTitle className="text-lg">{name}</CardTitle>
          <CardDescription>{chapters} Chapters</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
      {/* </Link> */}
    </div>
  );
}
