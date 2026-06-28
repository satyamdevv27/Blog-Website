// routes/blogroutes.js
import express from "express"; 
import protect from "../middleware/authMiddleware.js";
import { create_blog, update_blog, delete_blog, getallblog } from '../controller/blogcontroller.js';

const router = express.Router();

// All paths route cleanly off the main base path
router.get('/', protect , getallblog);
router.post('/',  protect ,create_blog);
router.put('/:id',  protect ,update_blog);
router.delete('/:id', protect , delete_blog);

export default router;
