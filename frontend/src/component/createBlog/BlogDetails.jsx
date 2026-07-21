import TagInput from "./TagInput";

export default function BlogDetails() {
  return (
    <div className="space-y-8 mb-10">

      <input
        type="text"
        placeholder="Write your story..."
        className="w-full bg-transparent text-5xl font-bold outline-none placeholder-zinc-600"
      />

      <textarea
        placeholder="Write a short summary..."
        rows={3}
        className="w-full resize-none bg-transparent outline-none text-lg placeholder-zinc-500"
      />

      <div className="grid md:grid-cols-2 gap-6">

        <select className="bg-zinc-900 border border-zinc-700 rounded-lg p-3 outline-none">

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