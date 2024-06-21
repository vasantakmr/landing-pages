import { Card } from "@/components/ui/card";

export function TimeTaken() {
  return (
    <>
      <Card>
        <div className="flex flex-row">
          <div>Tyoe of learner</div>
          <div>Hours per day</div>
          <div>Days per week</div>
          <div>Results</div>
        </div>
      </Card>
    </>
  );
}
