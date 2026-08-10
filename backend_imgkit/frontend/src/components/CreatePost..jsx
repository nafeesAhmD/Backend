import React from 'react'
import axios from 'axios'

const CreatePost = () => {

     const handlesubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post('http://localhost:3000/create-post', formData)
        .then((res) =>{
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
            alert("error creating post")
        })


     }   
  return (
    <section>
        <h1>Create post</h1>

        <form onSubmit={handlesubmit}> 
            <div>
            <input className='w-100 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400 m-2'
            type="file" name='image' accept='image/*' />
            </div>
            <div>

            <input className='w-100 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-gray-400 m-2'
            placeholder='Enter caption'
            type="text" name='caption' required />
            </div>
            <button className='rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-500/20 active:scale-95 cursor-pointer'
            type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default CreatePost