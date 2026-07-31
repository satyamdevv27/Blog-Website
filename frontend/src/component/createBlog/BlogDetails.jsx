
import TagInput from "./TagInput";
import { useBlogStore } from "../../store/blogStore";
import { title,setTitle,Summary,setSummary,Category,setCategory } from "useBlogStore";

export default function BlogDetails() {
const title = useBlogStore((state) => state.title);
const setTitle = useBlogStore((state) => state.setTitle);

const summary = useBlogStore((state) => state.summary);
const setSummary = useBlogStore((state) => state.setSummary);

const category = useBlogStore((state) => state.category);
const setCategory = useBlogStore((state) => state.setCategory);

  return (
    <div className="space-y-8 mb-10 border-2 border-amber-300">

      <input
        type="text"
        placeholder="Write your story..."
        className="w-full bg-transparent text-5xl font-bold outline-none placeholder-zinc-600"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write a short summary..."
        rows={3}
        className="w-full resize-none bg-transparent outline-none text-lg placeholder-zinc-500"
        value={Summary}
        onChange={(e)=>setSummary(e.target.value)}
      />

      <div className="grid md:grid-cols-2 gap-6">

        <select className="bg-zinc-900 border border-zinc-700 rounded-lg p-3 outline-none" value={Category} onChange={(e)=>setCategory(e.target.value)}>

          <option>Select Category</option>

          <option>Technology</option>

          <option>Programming</option>

          <option>AI</option>

          <option>Career</option>

        </select>

        <TagInput />

      </div>

    </div>
  );
}