import React, { useState } from 'react';
import { IoReorderThree } from "react-icons/io5";
import { menu } from './SidebarConfig';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import CreatePostModal from '../Post/CreatePostModal';
import SearchComponent from '../SearchComponent/SearchComponent';
const Sidebar = () => {
    const [activeTab, setActiveTab] = useState();
    const [isVisible, setIsVisible] = useState();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const navigate = useNavigate();

    let handleTabClick = (title) => {
        setActiveTab(title)
        if (title === "Profile") {
            navigate("/username")
        }
        else if (title === "Home") {
            navigate("/")
        }
        else if (title === "Create") {
            onOpen()
        }
        if (title === "Search") {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }
    return (

        <div className='sticky top-0 h-[100vh] pt-10 pl-6 flex '>
            
            <div className='flex flex-col h-full justify-between px-2'>
                <div>
                {activeTab!=='Search'&&<div>
                        <img className='w-40 ml-1' src="https://i.imgur.com/zqpwkLQ.png" alt="" />
                    </div>}
                    
                    <div className='mt-10'>
                        {menu.map((item) =>
                            <div onClick={() => handleTabClick(item.title)}
                            className={`${activeTab === 'Search' ? '-ml-8' : ""} flex items-center mb-5 cursor-pointer text-xl pl-2 `}>
                                <p>{activeTab === item.title ? item.activeIcon : item.icon}</p>

                                {activeTab!=='Search'&&<p className={`${activeTab === item.title ? 'font-bold' : "font-normal"} ml-2`}>{item.title}</p>}

                            </div>)}
                    </div>
                </div>

                <div className='flex cursor-pointer item-center pl-1 pb-16'>
                    <div className={`text-3xl ${activeTab === 'Search' ? '-ml-8 ' : ""}`}><IoReorderThree /></div>
                    {activeTab!=='Search'&& <p className='ml-2 text-xl'>More</p>}
                </div>
            </div>

            <CreatePostModal onClose={onClose} isOpen={isOpen} />
            {isVisible&&<SearchComponent/>}
        </div>

    )

}


export default Sidebar