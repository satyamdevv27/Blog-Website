


import TopBar from "../component/createBlog/TopBar";
import CoverUpload from "../component/createBlog/CoverUpload";
import BlogDetails from "../component/createBlog/BlogDetails";
import Editor from "../component/createBlog/Editor";

export default function CreateBlog() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-8">

        <TopBar />

        <CoverUpload />

        <BlogDetails />

        <Editor />

      </div>
    </section>
  );
}