import Image from "next/image";
import Navbar from "@/components/Navbar";
import Preview from "@/components/PreviewSection";
import PreviewButton from "@/components/PreviewButton";
import { FormCard } from "@/components/FormCard";
import Header from "@/components/Header";
import TableSection from "@/components/TableSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <TableSection />
    </div>
  );
}
// https://m2.material.io/design/color/dark-theme.html#behavior
// Button cursors
{
  /* <button class="cursor-pointer ...">Submit</button> - submit file
<button class="cursor-progress ...">Saving...</button> - download file
<button class="cursor-not-allowed ..." disabled>Confirm</button> */
} // - no file selected
