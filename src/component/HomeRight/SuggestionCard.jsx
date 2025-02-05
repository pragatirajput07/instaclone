import React from 'react'

const SuggestionCard = () => {

    return (

        <div className='flex justify-between items-center '>
            <div className='flex items-center'>
                <img className='w-12 h-12 rounded-full' src="https://cdn.pixabay.com/photo/2023/11/02/16/47/dawn-8361032_1280.jpg" alt="" />
                <div className='ml-2'>
                    <p className='text-sm font-semibold'>
                        Username
                    </p>
                    <p className='text-sm font-semibold opacity-70'>Follow You</p>
                </div>
            </div>
            <p className='text-blue-700 text-sm font-semibold'>Follow</p>
        </div>

    )
}

export default SuggestionCard