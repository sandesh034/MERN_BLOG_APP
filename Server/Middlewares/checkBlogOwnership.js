const blogModel=require('../Models/blogModel')

const checkBlogOwnership=async(req,res,next)=>{
    try {
        const blogId=req.params.id
        const blog=await blogModel.findById(blogId)
        if(!blog){
            return(res.status(400).json({'message':'Blog post not found'}))   
        }
        else if(blog.owner.toString()!==req.userId)
            return(res.status(400).json({'message':'Permission Denied: You are not the owner of this blog.'})) 
        
        else{
            req.blog=blog
            next()
        }
    }
     catch (error) {
        console.log(error)
    }
}
module.exports=checkBlogOwnership