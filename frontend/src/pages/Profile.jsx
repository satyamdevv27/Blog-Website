import axios from"axios"
import ProfileHeader from "../component/profile_component/ProfileHeader";
import ProfileTabs from "../component/profile_component/ProfileTabs";
import BlogGrid from "../component/profile_component/BlogGrid";
import { useEffect, useState } from "react";

export default function Profile() {
  const [blogs,setbolgs] = useState([])

useEffect(()=>{
  const getallblog=async()=>{

    try {
      const token = localStorage.getItem("token");

const response = await axios.get(
  "http://localhost:5000/api/getallblog",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);



setbolgs(response.data)
console.log(blogs);

    } catch (error) {
      console.log(error);
      
    }

  }

getallblog()
},[])



  return (
    <section className="min-h-screen bg-zinc-950 text-white">

      <div className="max-w-6xl mx-auto px-5 py-10">

        <ProfileHeader />

        <ProfileTabs />

        <BlogGrid />

      </div>

    </section>
  );
}