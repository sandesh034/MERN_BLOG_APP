import React from 'react'
import logo from '../Images/logo.png'
import { useState } from 'react';
// import JoditEditor from 'jodit-react';


const AddBlog = () => {


    // useEffect(() => {
    //     const checkLogin = async () => {
    //         const response = await fetch('http://127.0.01:8000/checkLogin', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             credentials: 'include'
    //         })
    //         const responseData = await response.json();
    //         const  status = responseData.status
    //         if(!status){
    //             window.location='/login'
    //         }
    //     }
    //     checkLogin()
    // }, [])

    // const editor = useRef(null);
    // const [content, setContent] = useState('');

    const [blogContent, setBlogContent] = useState({})
    // const [category, setCategory] = useState([])
    const category = ['Fooding', 'Technology', 'Music', 'Art']

    const handleChange = (e) => {
        setBlogContent({
            ...blogContent,
            [e.target.name]: e.target.value
        })
    }
    console.log(blogContent)

    return (
        <div className='container'>
            <div className='add-blog-wrapper'>
                <h3>Create A Blog Post</h3>
                <img className='add-blog-form-img' src={logo} alt='' />

                <form encType=''>
                    <div className='add-blog-form-field'>
                        <label htmlFor='blog-title'>Title</label>
                        <input type='text' id='blog-title' name='blog-title' placeholder='Enter the blog title' onChange={handleChange}></input>
                    </div>

                    <div className='add-blog-form-field'>
                        <label htmlFor='blog-title'>Select category</label>
                        <select name='blog-category' onChange={handleChange}>
                            <option value=''>Select Category</option>
                            {
                                category.map((item) => {
                                    return (
                                        <option value={item} key={item}>{item}</option>
                                    )
                                })
                            }

                        </select>
                    </div>

                    <div className='add-blog-form-field'>
                        <label htmlFor='blog-description'>Description</label>
                        <textarea rows='10' id='blog-description' name='blog-description' placeholder='Enter the blog description' onChange={handleChange}></textarea>
                        {/* <JoditEditor
                            ref={editor}
                            value={content}
                            onChange={newContent => setContent(newContent)}
                        /> */}

                    </div>
                    <div className='add-blog-form-field'>
                        <label htmlFor='blog-image'>Image</label>
                        <input type='file' id='blog-image' placeholder='Add Image'></input>
                    </div>
                    <div className='add-blog-button-section'>
                        <div className='submit-btn two-btn'>Add More Paragraph</div>
                        <div className='submit-btn two-btn' type='submit'>Create A Blog Post</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBlog