import Image from "next/image";
import { IDE } from "./ide";
import { Dashboard } from "./dashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 py-24">
      <Dashboard/>
    </main>
  );
}
