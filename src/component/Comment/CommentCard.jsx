import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
const CommentCard = () => {

    
    const [CommentLiked, setCommentLiked] = useState(false);
    const handleLike = () => {
        setCommentLiked(!CommentLiked)
    }

    

    return (

        <div>
            <div className='flex items-center justify-between py-2'>
                <div className='flex mt-3'>
                    <div>
                        <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/11/02/16/47/dawn-8361032_1280.jpg" alt="" />
                    </div>
                    <div className='ml-3  '>
                        <p>
                            <span className='font-semibold'>username</span>
                            <span className='ml-2'>Nice post</span>
                        </p>

                        <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
                            <span>1 min ago</span>
                            <span>23 Likes</span>
                        </div>
                    </div>
                </div>

                <div onClick={handleLike}>
                    {CommentLiked ? <AiFillHeart className='opacity-50 text-xs cursor-pointer' color='red' /> : <AiOutlineHeart className='opacity-50 text-xs cursor-pointer' />}
                </div>

            </div>


        </div>
       

    )

}

export default CommentCard