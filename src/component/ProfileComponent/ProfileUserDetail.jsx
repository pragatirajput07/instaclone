import React from 'react'
import { TbCircleDashed } from 'react-icons/tb'
const ProfileUserDetail = () => {
    return (
        <div className='py-14 w-full'>

            <div className='flex items-center  '>

                <div className='w-[15]'  >
                    <img className='w-44 h-44 rounded-full ' src="https://cdn.pixabay.com/photo/2023/11/02/16/47/dawn-8361032_1280.jpg" alt="" />
                </div>

                <div className='space-y-5 ml-4'>
                    <div className='flex items-center space-x-10 ml-10'>
                        <p>username</p>
                        <button className='bg-gray-200 px-4 py-1 rounded-xl'>Edit Profile</button>
                        <button className='bg-gray-200 px-4 py-1 rounded-xl'>Add Tools</button>
                        <span className='text-2xl'><TbCircleDashed></TbCircleDashed></span>
                    </div>

                    <div className='flex items-center space-x-10  ml-10 mt-6'>
                        <div>
                            <span className='font-semibold mr-2'>10  </span>
                            <span>Posts</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-2'>5  </span>
                            <span>Followers</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-2'>51  </span>
                            <span>Followings</span>
                        </div>
                        
                    </div>
                    <div className=' '>
                        
                            <p className='flex  ml-10'>Username</p>
                            <p className='flex ml-8 mt-2 text-justify'>
                            🤔 Can’t seem to recall where I stole this bio from or why.<br/>
                            🥩 Certified meat-eater!<br/>
                            🍫 Chocolate never asks questions. Chocolate understands.<br/>
                            🤪 Don’t call me crazy! I prefer the term mentally hilarious.</p>

                    </div>
                </div>



            </div>

        </div>

    )
}

export default ProfileUserDetail