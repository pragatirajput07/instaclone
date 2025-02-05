import React from 'react'

const SearchUserCard = () => {

    return (

        <div>
            <div className='flex items-center pl-2 mt-3'>
               
                <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2024/08/23/12/53/water-lily-8991682_1280.png" alt="" />
                <div className='ml-2'>
                    <p>FullName</p>
                    <p className='opacity-70'>Username</p>
                </div>
                
            </div>
        </div>

    )

}

export default SearchUserCard