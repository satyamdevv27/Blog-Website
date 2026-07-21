import { ImagePlus } from "lucide-react";

export default function CoverUpload() {
  return (
    <div className="mb-10">

      <div className="border-2 border-dashed border-zinc-700 rounded-xl h-72 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition">

        <ImagePlus size={40} />

        <p className="mt-4 text-zinc-400">
          Click to upload cover image
        </p>

      </div>

    </div>
  );
}