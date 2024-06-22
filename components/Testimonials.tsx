import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
export function Testimonials() {
  return (
    <div className="flex justify-center w-full flex-col items-center gap-3">
      <Badge variant="destructive">Testimonials</Badge>
      <div className="text-4xl text-center">
        34,000+ students have already transformed their lives
      </div>
      <div className="flex flex-wrap w-3/4 gap-5 justify-center mt-4">
        <Card className="w-80 h-56"></Card>
        <Card className="w-80 h-56"></Card>
        <Card className="w-80 h-56"></Card>
        <Card className="w-80 h-56"></Card>
        <Card className="w-80 h-"></Card>
      </div>
    </div>
  );
}
