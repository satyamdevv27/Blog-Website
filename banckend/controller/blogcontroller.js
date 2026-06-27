// import blogmodel from "../models/blogmodel.js"; \
import blogmodel from "../models/blogmodel.js";

export const getallblog = async (req ,res) => {
  try {
    const allblog = await blogmodel.find({})

     if (allblog.length === 0) {
      // Use 404 Not Found for missing collection content
      return res.status(404).json({ message: "No blogs found in the database" });
    }
    res.status(201).json(allblog)
  } catch (error) {
    res.status(401).json({message:"server error" , error:error.message})
  }
  
}


export const create_blog = async (req ,res)=>{
  try {
      const {title,content,coverImage,author,category,tags,status,views,summary} = req.body;

    const newblog = await blogmodel.create({title,content,coverImage,author,category,tags,status,views,summary})
    res.status(201).json({message:"blog created sucessfully"})
  } catch (error) {
    res.status(401).json({message : "couldn't create blog ",
        error: error.message 
    })
    
  }
     

}

export const update_blog = async (req ,res) => {
try {
  const {id} = req.params;  
  const updateblog = await blogmodel.findByIdAndUpdate(
    id,
    req.body,
    {
      new:true,
      runValidators:true
    }
  )
  if(!updateblog){
    res.status(404).json({message:"Blog not found"})
  }
  res.status(201).json({message:"blog updated sucessfully"})

} catch (error) {
 res.status(401).json({message:"update failed" , error:error.message}) 
}  

}

export const delete_blog = async (req , res) =>{
  try {
    const  {id} = req.params
    const deleteblog = await blogmodel.findByIdAndDelete(id)

    if(!deleteblog){
      res.status(401).json({message:"blog not found"})
    }
    res.status(201).json({message:"blog deleted sucessfully"})
  } catch (error) {
    res.status(401).json({message:"blog couldn't be deleted" , error:error.message})
  }
}
