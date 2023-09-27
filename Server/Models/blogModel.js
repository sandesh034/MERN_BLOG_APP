const mongoose = require('mongoose')

const paragraphSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    }
})

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    paragraph: {
        type: [paragraphSchema],
        default: []
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
},{ timestamps: true })

const blogModel=mongoose.model('blogModel',blogSchema)
module.exports=blogModel