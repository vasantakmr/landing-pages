import ShimmerButton from "./landing/ShimmerButton";
import { Card, CardHeader } from "./ui/card";

export function Bonuses() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-7 p-12">
      <div className="text-5xl font-bold flex justify-center items-center w-full">
        <p>
          Unlock bonuses worth{" "}
          <span className="text-orange-600 text-6xl decoration-wavy">
            ₹17,000
          </span>
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-10 p-6">
        <Card className="w-80 h-96 border-2 border-dashed border-orange-500 rounded-xl">
          <div className="w-full h-full flex flex-col">
            <div className="h-1/6 flex w-full justify-center items-center bg-orange-500 text-white rounded-t-xl">
              Bonus 1
            </div>
            <div className="h-5/6 flex w-full justify-center items-center">
              image
            </div>
            <div className="h-1/6 flex w-full justify-center items-center gap-5 bg-orange-100 rounded-b-xl">
              <span className="line-through text-2xl text-black font-semibold">
                ₹7000
              </span>{" "}
              <span className="text-lg font-bold text-orange-500">Free</span>
            </div>
          </div>
        </Card>
        <Card className="w-80 h-96 border-2 border-dashed border-orange-500 rounded-xl">
          <div className="w-full h-full flex flex-col">
            <div className="h-1/6 flex w-full justify-center items-center bg-orange-500 text-white rounded-t-xl">
              Bonus 2
            </div>
            <div className="h-5/6 flex w-full justify-center items-center">
              image
            </div>
            <div className="h-1/6 flex w-full justify-center items-center gap-5 bg-orange-100 rounded-b-xl">
              <span className="line-through text-2xl text-black font-semibold">
                ₹7000
              </span>{" "}
              <span className="text-lg font-bold text-orange-500">Free</span>
            </div>
          </div>
        </Card>
        <Card className=" w-80 h-96 border-2 border-dashed border-orange-500 rounded-xl">
          <div className="w-full h-full flex flex-col">
            <div className="h-1/6 flex w-full justify-center items-center bg-orange-500 text-white rounded-t-xl">
              Bonus 3
            </div>
            <div className="h-5/6 flex w-full justify-center items-center">
              image
            </div>
            <div className="h-1/6 flex w-full justify-center items-center gap-5 bg-orange-100 rounded-b-xl">
              <span className="line-through text-2xl text-black font-semibold">
                ₹7000
              </span>{" "}
              <span className="text-lg font-bold text-orange-500">Free</span>
            </div>
          </div>
        </Card>
      </div>
      <div>
        <ShimmerButton text="Unlock Bonuses" />
      </div>
    </div>
  );
}
