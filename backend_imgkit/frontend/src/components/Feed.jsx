import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Feed() {
    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://i.pinimg.com/736x/9b/9a/98/9b9a987e605c31f2dc6332752c072163.jpg",
            caption: "My first post"
        }
    ])

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then((res) => {
            console.log(res.data)
            setPosts(res.data.posts)
        })
    },[])
  return (
    <div>
      <section  className="mx-auto flex max-w-xl flex-col gap-6 px-4">
        {
            posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md'>
                        {/* <img src={post.image} alt={post.caption} /> */}
   <div className="flex items-center w-full content-start bg-gray-100">
                <img
                
                  src={post.image}
                  alt={post.caption}
                  className="w-90 h-90 object-contain m-2"
                />
              </div>                        
                        {/* <p>{post.caption}</p> */}
                 {/* Caption */}
              <div className="border-t border-gray-100 px-5 py-4">
                <p className="text-base leading-6 text-gray-800">
                  {post.caption}
                </p>
              </div>        

                    </div>
                ))
            ) :
            (
                <h1>No post available</h1>
            )
        }
      </section>
    </div>
  )
}

export default Feed
