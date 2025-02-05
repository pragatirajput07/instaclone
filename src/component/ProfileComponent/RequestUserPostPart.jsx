import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser, } from 'react-icons/ai';
import { RiVideoLine } from 'react-icons/ri';
import { BiBookmark } from 'react-icons/bi';
import ReactUserPostCard from './ReactUserPostCard';


const RequestUserPostPart = () => {
    const [activeTab, setActiveTab] = useState();

    const tabs = [

        {
            tab: "post",
            icon: <AiOutlineTable></AiOutlineTable>,
            activeIcon: ""
        },
        {
            tab: "Reels",
            icon: <RiVideoLine></RiVideoLine>,
            activeIcon: ""
        },
        {
            tab: "Saved",
            icon: <BiBookmark />,
            activeIcon: ""
        },
        {
            tab: "Tagged",
            icon: <BiBookmark />,
            activeIcon: <AiOutlineUser></AiOutlineUser>
        },
    ]
    return (
        <>
            <div className='flex space-x-24 border-t relative testing'>
                {tabs.map((item) =>

                    <div onClick={() => setActiveTab(item.tab)}

                        className={`${activeTab === item.tab ? "border-t border-black" : "opacity-75"}
                        flex items-center cursor-pointer py-2 text-sm`}>

                        <p>{item.icon}</p>
                        <p className='ml-1'>{item.tab}</p>

                    </div>

                )}


            </div>
            
            <div >
                <div className='grid grid-cols-3'>
                    {[1,1,1,1,1].map((item)=><ReactUserPostCard />)}</div>
            </div>
        </>
    )
}



export default RequestUserPostPart