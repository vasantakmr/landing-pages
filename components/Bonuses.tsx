import ShimmerButton from "./landing/ShimmerButton";
import { Card } from "./ui/card";

export function Bonuses() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-7">
      <div>Unlock bonuses worth ₹17,000</div>
      <div className="flex flex-col md:flex-row gap-10">
        <Card className="w-80 h-96"></Card>
        <Card className="w-80 h-96"></Card>
        <Card className="w-80 h-96"></Card>
      </div>
      <div>
        <ShimmerButton text="Unlock Bonuses" />
      </div>
    </div>
  );
}
