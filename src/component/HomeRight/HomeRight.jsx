import React from 'react'
import SuggestionCard from './SuggestionCard'

const HomeRight = () => {

    return (

        <div className=''>

            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div>
                            <img className='h-12 w-12 rounded-full' src="https://cdn.pixabay.com/photo/2023/11/02/16/47/dawn-8361032_1280.jpg" alt="" />
                        </div>
                        <div className='ml-3'>
                            <p>Fullname</p>
                            <p className='opacity-70'>Username</p>

                        </div>
                    </div>
                    <div>
                        <p className='text-blue-700 font-semibold'>
                            Switch
                        </p>
                    </div>
                </div>
                <div className='space-y-5 mt-10'>
                    {[1, 1, 1, 1, 1].map((item) => <SuggestionCard />)}
                </div>

            </div>
        </div>

    )

}

export default HomeRight