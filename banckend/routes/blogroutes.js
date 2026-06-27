// routes/blogroutes.js
import express from "express"; 
import { create_blog, update_blog, delete_blog, getallblog } from '../controller/blogcontroller.js';

const router = express.Router();

// All paths route cleanly off the main base path
router.get('/', getallblog);
router.post('/', create_blog);
router.put('/:id', update_blog);
router.delete('/:id', delete_blog);

export default router;
