import {content , setcontent} from "../../store/blogStore"
export default function Editor() {
  
  return (
    <div>

      <textarea
        placeholder="Start writing..."
        className="w-full min-h-[450px] bg-zinc-900 border border-zinc-700 rounded-xl p-6 resize-none outline-none text-lg placeholder-zinc-600"
        value={content}
        onChange={(e)=>setcontent(e.target.value)}
      />

    </div>
  );
}