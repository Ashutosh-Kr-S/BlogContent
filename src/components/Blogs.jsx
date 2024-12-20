import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import Card from './Card'

const Blogs = () => {
    // consume
    const {posts,loading} = useContext(AppContext)

  return (
    <div className='w-11/12 max-w-[680px] p-4 flex flex-col gap-y-8'>
      {
        loading ? 
            (
            <div className='w-full h-[80vh] flex justify-center items-center'> 
                <Spinner/>
            </div>) : 
            
            (
            posts.length === 0 ?
            (
                <div className='h-[100vh]'>
                    <p>Post not found</p>
                </div>
            ):
            (posts.map((post)=>(
                <div className='bg-emerald-50 p-4 rounded-md'>
                    <p className='text-sm  font-bold'>{post.title}</p>
                    <p className='text-[12px]'>
                        By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                    </p>
                    <p className='text-[12px]'>
                        Posted on : {post.date} 
                    </p>
                    <p className='text-sm mb-2 mt-2'>
                        {post.content}
                    </p>
                    <div className='flex flex-wrap gap-x-2'>
                        {post.tags.map((tag)=>(
                            <span className='text-blue-400 underline font-bold text-sm'>{`#${tag}`}</span>
                        ))}
                    </div>
                </div>
            )))
        )
      }
    </div>
  )
}

export default Blogs
