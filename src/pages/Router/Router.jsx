import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from '../../component/Sidebar/Sidebar';
import Homepage from '../Homepage/Homepage';
import Profile from '../Profile/Profile';
import Story from '../../component/Story/Story';
import Auth from '../Auth/Auth';
import SearchComponent from '../../component/SearchComponent/SearchComponent';
const Router = () => {
    const  location = useLocation();
    return (

        <div>
            {location.pathname !== "/login" && location.pathname !== "/signup" ?(
                <div className='flex'>
                    <div className='w-[20%] border border-1-slate-5000'>
                        <Sidebar />
                    </div>
                    <div className='w-full'>
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/username" element={<Profile />} />
                            <Route path="/story" element={<Story />}></Route>
                            <Route path="/Search" element={<SearchComponent />}></Route>
                        </Routes>
                    </div>
                </div>
              )  :(
                <div>
                    <Routes>
                        <Route path="/login" element={<Auth/>}></Route>
                        <Route path="/Signup" element={<Auth/>}></Route>
                    </Routes>
                </div>)}
        </div>
    );
}

export default Router;
