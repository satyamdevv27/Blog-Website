export default function ProfileTabs({ isactivetab, setisactivetab }) {
  return (
    <div className="flex justify-center mt-10 border-b border-zinc-800">
      <button
        className={`px-8 py-4  border-white ${ isactivetab === "published"? "border-b-2" :"text-zinc-500"}`}
        onClick={() => setisactivetab("published")}
      >
        Blogs
      </button>

      <button
        className={`px-8 py-4  ${ isactivetab === "draft"? "border-b-2" :"text-zinc-500"}` }
        onClick={() => setisactivetab("draft")}
      >
        Drafts
      </button>
    </div>
  );
}
