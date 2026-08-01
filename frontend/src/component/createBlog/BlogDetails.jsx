import TagInput from "./TagInput";
import { useBlogStore } from "../../store/blogStore";


export default function BlogDetails() {
  const { title, setTitle, summary, setSummary, category, setCategory } = useBlogStore()




  return (
    <div className="space-y-8 mb-10 border-2 border-amber-300">
      <input
        type="text"
        placeholder="Write your story..."
        className="w-full bg-transparent text-5xl font-bold outline-none placeholder-zinc-600"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write a short summary..."
        rows={3}
        className="w-full resize-none bg-transparent outline-none text-lg placeholder-zinc-500"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />

      <div className="grid md:grid-cols-2 gap-6">
        <select
          className="bg-zinc-900 border border-zinc-700 rounded-lg p-3 outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
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
