import React from 'react'
import { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import CommentCard from './CommentCard'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill,BsEmojiSmile } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import './CommentModel.css'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
} from '@chakra-ui/react'
const CommentModel = ({onClose, isOpen}) => {
    const [isPostLiked, setisPostliked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const handleBook = () => {
        setIsSaved(!isSaved)
    }
    const handlePostUser = () => {
        setisPostliked(!isPostLiked)
    }
    return (

        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>

                    <ModalBody>
                        <div className='flex h-[80vh]'>

                            <div className='w-[45%] flex flex-col justify-center'>
                                <img className='max-h-full w-full' src="https://cdn.pixabay.com/photo/2023/11/02/16/47/dawn-8361032_1280.jpg" alt="" />
                            </div>


                            <div className=' w-[55%] pl-10'>
                                <div className='flex items-center justify-between py-2'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/11/02/16/47/dawn-8361032_1280.jpg" alt="" />
                                        </div>
                                        <div className='ml-2'>
                                            <p>Username</p>

                                        </div>

                                    </div>
                                    <BsThreeDots />
                                </div>

                                <hr />

                                <div className='comment'>
                                    {[1, 1, 1, 1,1,1,1,1].map(() =>
                                        <CommentCard />
                                    )}

                                </div>

                                <div className='flex justify-between items-center py-5'>
                                    <div className=' flex items-center text-3xl space-x-3 '  >
                                        {isPostLiked ? <AiFillHeart onClick={handlePostUser} color='red' className=' text-3xl' /> : <AiOutlineHeart onClick={handlePostUser} className='text-3xl hover:opacity-50 cursor-pointer' />}
                                        <FaRegComment className='text-2xl hover:opacity-50 cursor-pointer' />
                                        <RiSendPlaneLine className='text-2xl hover:opacity-50 cursor-pointer' />
                                    </div>
                                    <div onClick={handleBook} className='text-2xl  cursor-pointer'>
                                        {isSaved ? <BsBookmarkFill className='hover:opacity-50 ' /> : <BsBookmark className='hover:opacity-50 ' />}

                                    </div>

                                </div>
                                <div className='w-full'>
                                    <p>10 Likes</p>
                                    <p className='opacity-50 py-2 text-sm'>1 day ago</p>
                                </div>
                                {/* border border-t */}
                                <div className=' w-full '>
                                    <div className='flex w-full items-center'>
                                        <BsEmojiSmile className=' text-xl' />
                                        <input className='comment-input text-black -mr-6' type="text" placeholder='Add a comment' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>

                </ModalContent>
            </Modal>

        </div>

    )

}

export default CommentModel