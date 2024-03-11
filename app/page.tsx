"use client";
import Description from "@/components/description/description";
import Last from "@/components/last/last";
import Notice from "@/components/notice/notice";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className=" w-full flex flex-col items-center">
      <Description />
      <Last />
      <Notice />
    </main>
  );
}
