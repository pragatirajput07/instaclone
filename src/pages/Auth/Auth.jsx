import React from 'react'
import "./Auth.css"
import Signin from '../../component/Rester/Signin'
import { useLocation } from 'react-router-dom'
import Signup from '../../component/Rester/Signup'
const Auth = () => {
const location=useLocation();
    return (

        <div className='flex items-center justify-center h-[100vh]'>
            <div>
                <div className='relative'>
                    <div className='h-[35.3rem] w-[38rem] object-fill'>
                        <img className='h-full w-full' src="/Assets/images/image copy 2.png" alt="" />
                        <div className='mobile-wallpaper h-[27.9rem] me-1 w-[13.8rem]  object-cover absolute rounded-3xl top-16 right-48 '>

                        </div>
                    </div>
                </div>

            </div>
            <div className='w-[28vw]'>
              {location.pathname==="/login"?<Signin/>:<Signup/>} 
                </div>
        </div>

    )

}


export default Auth


