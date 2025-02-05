import React from 'react'
import './SearchComponent.css'
import SearchUserCard from './SearchUserCard'
const SearchComponent = () => {

    return (

        <div className='SearchContainer '>
            <div className='pb-5 '>
                <h1 className='text-xl pb-4 pl-2'>Search</h1>
                <input className='searchInput' type="text" placeholder='Search...' />
                
            </div>
                
            <hr />

            <div className='py-3 SearchUserCard  '>
            {   [1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(()=><SearchUserCard/>)} 
            </div>
        </div>

    )
}

export default SearchComponent