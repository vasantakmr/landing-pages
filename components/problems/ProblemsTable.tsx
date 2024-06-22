import Link from "next/link";
import { problems } from "@/data/problems";
import clsx from "clsx";
import { Circle } from "lucide-react";

type ProblemsTableProps = {};

const ProblemsTable = () => {
  return (
    <>
      <tbody>
        {problems.map((doc, index) => {
          const difficultyColor =
            doc.difficulty === "Easy"
              ? "text-green-600"
              : doc.difficulty === "Medium"
              ? "text-yellow-600"
              : "text-red-600";

          return (
            <tr
              key={doc.id}
              className={clsx("text-foreground", { "": index % 2 === 1 })}
            >
              <th className="px-2 py-4 font-medium whitespace-nowrap text-foreground">
                <Circle />
              </th>
              <td className="px-6 py-4">
                <Link
                  href={`/problems/${doc.id}`}
                  className="hover:text-muted-foreground font-medium text-foreground cursor-pointer"
                >
                  {doc.title}
                </Link>
              </td>
              <td className={`px-6 py-4 ${difficultyColor} font-medium`}>
                {doc.difficulty}
              </td>
              <td className="px-6 py-4 font-medium">{doc.category}</td>
              <td className="px-6 py-4 text-foreground font-medium">
                {doc.videoId ? <p>Video is present</p> : <p>Coming soon</p>}
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};
export default ProblemsTable;
