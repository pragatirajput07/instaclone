import React from 'react'
import { useNavigate } from 'react-router-dom';


const StoryCircle = () => {
    const navigate = useNavigate();

    const handleTabClick = () => {
        navigate("/story"); // Navigate to the story page
    };
    return (

        <div>
            <div onClick={handleTabClick}  className='cursor-pointer flex flex-col items-center'>
                <img className='h-16 w-16 rounded-full' src="https://cdn.pixabay.com/photo/2023/11/02/16/47/dawn-8361032_1280.jpg" alt="" />
            <p>Username</p>
            </div>
        </div>

    )

}


export default StoryCircle