import { Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center h-40">
      <div className="flex gap-6 items-center pt-3">
        <Link href="https://www.instagram.com/gurucodes.dev/">
          <Instagram size={20} className="cursor-pointer" />
        </Link>
        <Link href="https://www.youtube.com/channel/UCABZ54RfQU7TFLOmpiKo3WA/videos">
          <Youtube size={22} className="cursor-pointer" />
        </Link>
      </div>
      <div className="w-full gap-12 flex justify-center p-3">
        <div className="cursor-pointer text-slate-300 font-semibold">
          <Link href={"/privacy"}>Privacy</Link>
        </div>
        <div className="cursor-pointer text-slate-300 font-semibold">
          <Link href={"/terms"}>Terms</Link>
        </div>

        {/* <div className="cursor-pointer text-slate-300 font-semibold">
          Contacts us
        </div> */}
      </div>
      <div>© 2024 Vasanta Kumar, Inc.</div>
    </div>
  );
}
