import { create } from "zustand";
import axios from "axios";
export const useFetchblog = create((set) => ({
  blogs: [],
  publishedblogs: [],
  draftblogs: [],
  fetchblog: async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:5000/api/getallblog", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const allblogs = response.data;

      const publisedblog = allblogs.filter(
        (blog) => blog.status === "published",
      );
      const draftblog = allblogs.filter((blog) => blog.status === "draft");

      set({
        blogs: allblogs,
        publishedblogs: publisedblog,
        draftblogs: draftblog,
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
