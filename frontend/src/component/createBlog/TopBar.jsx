import { ArrowLeft } from "lucide-react";
import PublishButtons from "./PublishButtons";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between mb-10">

      <button className="flex items-center gap-2 text-zinc-300 hover:text-white transition">
        <ArrowLeft size={20} />
        Back
      </button>

      <PublishButtons />

    </div>
  );
}