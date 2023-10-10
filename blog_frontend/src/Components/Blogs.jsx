import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blogs = () => {
  const [blog, setBlog] = useState([]);

  const getBlogs = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/getAllBlogs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        setBlog(responseData.data);
      } else {
        console.error('Failed to fetch blogs');
      }
    } catch (error) {
      console.error('Error while fetching blogs', error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
    <h1 style={{textAlign:'center'}}>Read The latest Blog</h1>
    <hr style={{marginTop:'10px'}}></hr>
      {blog.map((blogItem) => (
        <BlogCard key={blogItem.id} data={blogItem} />
      ))}
    </div>
  );
};

export default Blogs;
