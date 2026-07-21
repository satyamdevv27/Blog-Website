export default function PublishButtons() {
  return (
    <div className="flex gap-3">

      <button className="px-5 py-2 rounded-lg border border-zinc-700 hover:bg-zinc-800 transition">
        Save Draft
      </button>

      <button className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition">
        Publish
      </button>

    </div>
  );
}
