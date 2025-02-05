import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import "./RequestUserPostCard.css";
const ReactUserPostCard = () => {
    return (
        <div>
            <div className='post w-60 h-60 mt-6'>
                <img className='cursor-pointer' src="https://cdn.pixabay.com/photo/2023/11/02/16/47/dawn-8361032_1280.jpg" alt="" />
                <div className='overlay flex justify-between'>
                    <div className='overlay-text'>
                        <div>
                            <AiFillHeart /><span>10</span>
                        </div>
                        <div><FaComment /> <span>30</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactUserPostCard