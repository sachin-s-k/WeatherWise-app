import { useState } from "react"
import axios from "axios"



const SearchBar=({getCurrentWeather})=>{
    const [cityName,setCityName]=useState('')
   

    return (
        <>
      
<div className="w-1/2 mx-auto mt-16">   
    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search"  onChange={(e)=>{setCityName(e.target.value)}}  id="default-search" className="block w-full p-4 ps-10 text-sm text-black border border-gray-500 rounded-lg focus:accent-black    dark:placeholder-gray-400 accent-black  " placeholder="Enter your city name..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 bg-black " onClick={()=>{getCurrentWeather(cityName)}}>Search</button>
    </div>
</div>

        
        </>
    )
}

export default SearchBar