import {create} from "zustand"

export const useBlogStore  = create((set)=>({

    title :"",
summary :"",
content :"",
category :"",
tags :[],
coverImage :"",
status: "draft",

setTitle:(title)=>(set({title})),
setSummary:(summary)=>(set({summary})),
setContent:(content)=>(set({content})),
setCategory:(category)=>(set({category})),
setTags:(tags)=>(set({tags})),
setCoverImage: (coverImage) => set({ coverImage }),
setStatus:(status)=>(set({status})),


}))
