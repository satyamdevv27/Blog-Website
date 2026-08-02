export default function BlogCard({blog}) {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-[1.02] transition">

      <img
        src="https://placehold.co/600x350"
        alt=""
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {blog.title}
        </h2>

        <p className="text-zinc-400 mt-2 text-sm">
          {blog.summary}
        </p>

        <div className="flex justify-between items-center mt-5">

          <span className="bg-indigo-600 px-3 py-1 rounded-full text-sm">
            {blog.category}
          </span>

          {/* <span className="text-zinc-400">
            👁 245
          </span> */}

        </div>

      </div>

    </div>
  );
}