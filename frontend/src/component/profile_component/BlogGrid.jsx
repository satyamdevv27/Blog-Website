import BlogCard from "./BlogCard";
import { useFetchblog } from "../../store/fetchblogstore";
export default function BlogGrid({isactivetab}) {
  const   publishedblog = useFetchblog((state)=>state.publishedblogs)
  const draftblog = useFetchblog((state)=>state.draftblogs)

  const blogtoshow = isactivetab ==="published"?  publishedblog : draftblog
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">



       {
        blogtoshow.map((item)=>(
          <BlogCard 
          key={item._id}
          blog={item}
          />
        ))
       }

    </div>
  );

}