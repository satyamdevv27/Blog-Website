import { useFetchblog } from "../store/fetchblogstore";
import ProfileHeader from "../component/profile_component/ProfileHeader";
import ProfileTabs from "../component/profile_component/ProfileTabs";
import BlogGrid from "../component/profile_component/BlogGrid";
import { useEffect, useState } from "react";

export default function Profile() {
  const [isactivetab , setisactivetab] = useState("published")

  const fetchblogs = useFetchblog((state)=>state.fetchblog)
 useEffect(()=>{
  fetchblogs()
 },[])


 
  return (
    <section className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <ProfileHeader/>

        <ProfileTabs
        isactivetab={isactivetab}
        setisactivetab={setisactivetab}

        />

        <BlogGrid isactivetab={isactivetab} />
      </div>
    </section>
  );
}
