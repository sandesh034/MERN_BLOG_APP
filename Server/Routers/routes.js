const express=require('express')
const router=express.Router()

const checkAuth=require('../Middlewares/checkAuth');
const checkBlogOwnership=require('../Middlewares/checkBlogOwnership')
const {registerUser,loginUser,checkLogin}=require("../Controllers/userAuth")
const {createBlog,getBlogById,updateBlog,deleteBlog,getBlogByUserId,getAllBlogs}=require("../Controllers/blog")
const {uploadImage,upload}=require('../Controllers/uploadImage')

router.get('/',(req,res)=>{
    res.send("Hello World")
})

router.post('/registerUser',registerUser)
router.post('/loginUser',loginUser)
router.get('/checkLogin',checkAuth,checkLogin)
router.post('/createBlog',checkAuth, createBlog)
router.get('/getAllBlogs',getAllBlogs)
router.get('/getBlogById/:id',getBlogById)
router.put('/updateBlog/:id',checkAuth,checkBlogOwnership,updateBlog)
router.delete('/deleteBlog/:id',checkAuth,checkBlogOwnership,deleteBlog)
router.get('/getBlogByUserId/:userId',getBlogByUserId)
router.post('/uploadImage',upload.single('blogImg'),uploadImage)
module.exports=router;

