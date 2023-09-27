const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const userSchema=mongoose.Schema({
    name:{
        type:String,
        requied:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        length:10
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    blogs:{
        type:Array,
        default:[]
    }

},{timestamps:true})
userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,8)
    }
    next()
})

userModel=mongoose.model('userModel',userSchema)
module.exports=userModel;