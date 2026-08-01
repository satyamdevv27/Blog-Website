import { ArrowLeft } from "lucide-react";
import PublishButtons from "./PublishButtons";
import { Link } from 'react-router-dom';
export default function TopBar() {
  return (
    <div className="flex items-center justify-between mb-10">

      <button className="flex items-center gap-2 text-zinc-300 hover:text-white transition"
      
      >
        <ArrowLeft size={20} />
        <Link to="/">Back</Link>
      </button>

      <PublishButtons />

    </div>
  );
}