import { useFetchblog } from "../../store/fetchblogstore";

export default function ProfileStats() {
  const publishedblog = useFetchblog((state)=>state.publishedblogs)
  const draftblog = useFetchblog((state)=>state.draftblogs)
  return (
    <div className="flex gap-10 mt-8">

      <div>
        <h2 className="text-2xl font-bold">
          {publishedblog.length}
        </h2>

        <p className="text-zinc-400">
          Blogs
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">
          {draftblog.length}
        </h2>

        <p className="text-zinc-400">
          Drafts
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">
          250
        </h2>

        <p className="text-zinc-400">
          Views
        </p>
      </div>

    </div>
  );
}