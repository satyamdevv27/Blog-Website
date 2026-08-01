import axios from "axios";
import { useBlogStore } from "../../store/blogStore";

export default function PublishButtons() {
  const { title, summary, content, category, tags, coverImage, status , setTitle , setSummary,setContent,setCategory,setTags } =
    useBlogStore();
  const submitblog = async() => {
    let token = localStorage.getItem("token");
    const blogdata = {
      title,
      summary,
      content,
      category,
      tags,
      coverImage,
      status,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/createblog",
        blogdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setTitle("")
      setSummary("")
      setContent("")
      setCategory("")
      setTags([])
      
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex gap-3">
      <button className="px-5 py-2 rounded-lg border border-zinc-700 hover:bg-zinc-800 transition">
        Save Draft
      </button>

      <button
        className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
        onClick={submitblog}
      >
        Publish
      </button>
    </div>
  );
}
