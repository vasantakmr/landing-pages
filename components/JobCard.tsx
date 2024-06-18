import { Badge } from "./ui/badge";
export default function JobCard() {
  return (
    <div className="cursor-pointer flex gap-5 p-2 border-b-2">
      <div className="flex items-center">#LOGO#</div>
      <div className="w-full flex items-center justify-between">
        <div>
          <p>Flipkart, inc</p>
          <p>Backend Developer (Rust)</p>
          <div>
            <Badge>Salary</Badge>
            <Badge>WFH</Badge>
          </div>
        </div>
        <div>6h</div>
      </div>
    </div>
  );
}
