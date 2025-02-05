import React, { useState } from 'react'
import { BsBookmark, BsThreeDots, BsBookmarkFill, BsEmojiSmile } from 'react-icons/bs';
import { useDisclosure } from '@chakra-ui/react';
import './PostCard.css'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import CommentModel from '../Comment/CommentModel';

const PostCard = () => {
    const [showdown, setShowdown] = useState(false);
    const [isPostLiked, setisPostliked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleBook = () => {
        setIsSaved(!isSaved)
    }
    const handlePostUser = () => {
        setisPostliked(!isPostLiked)
    }
    const handleClick = () => {
        setShowdown(!showdown);
    }
    const handleOpenCommentModal=()=>{
       onOpen();
    }
    return (

        <div>
            <div className='border rounded-md w-full'>
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    <div className='flex items-center'>
                        <img className="h-12 w-12 rounded-full  mb-2"
                            src="https://cdn.pixabay.com/photo/2023/11/02/16/47/dawn-8361032_1280.jpg"
                            alt="User"
                        />
                        <div className=' '>
                            <div className="font-semibold text-sm">username</div>
                            <p className="font-thin text-sm">Location</p>
                        </div>

                    </div>
                    <div className='dropdown'>
                        <BsThreeDots className={`${showdown === true ? 'ml-12 text-2xl' : "font-normal"} dots`} onClick={handleClick} />
                        <div className='dropdown-content'>
                            {showdown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                        </div>
                    </div>



                </div>

                <div className='w-full'>
                    <img className='w-full' src="https://cdn.pixabay.com/photo/2023/11/02/16/47/dawn-8361032_1280.jpg"
                        alt="User" />
                </div>
                <div className='flex justify-between items-center py-5 px-4'>
                    <div className=' flex items-center text-3xl space-x-3 '  >
                        {isPostLiked ? <AiFillHeart onClick={handlePostUser} color='red' className=' text-3xl' /> : <AiOutlineHeart onClick={handlePostUser} className='text-3xl hover:opacity-50 cursor-pointer' />}
                        <FaRegComment onClick={handleOpenCommentModal} className='text-2xl hover:opacity-50 cursor-pointer' />
                        <RiSendPlaneLine className='text-2xl hover:opacity-50 cursor-pointer' />
                    </div>
                    <div onClick={handleBook} className='text-2xl  cursor-pointer'>
                        {isSaved ? <BsBookmarkFill className='hover:opacity-50 ' /> : <BsBookmark className='hover:opacity-50 ' />}

                    </div>

                </div>
                <div className='w-full py-2 px-5'>
                    <p className='items-start flex'>10 Likes</p>
                    <p className='items-start flex opacity-50 py-2 cursor-pointer'>View all 10 comments</p>
                </div>
                <div className='border border-t w-full'>
                    <div className='flex w-full items-center'>
                        <BsEmojiSmile className='mx-2 text-xl'/>
                        <input className='comment-input text-black' type="text" placeholder='Add a comment' />
                    </div>
                </div>
            </div>
            <CommentModel handlePostUser={handlePostUser} onClose={onClose} isOpen={isOpen} handleClick={handleClick} isPostLiked={isPostLiked} isSaved={isSaved}/>
        </div>

    )

}

export default PostCard