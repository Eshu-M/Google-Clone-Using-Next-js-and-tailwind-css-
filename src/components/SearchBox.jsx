import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'

export default function SearchBox() {
    const [input ,setInput]=useState("")
    const router=useRouter();
    const [randomSearchLoading, setRandomSearchLoading]=useState(false);
    function handleSubmit(e){
          e.preventDefault();
          if (!input.trim()) return;
          router.push(`/search/web?searchTerm=${input}`);
        }
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex w-full space-x-2 items-center border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl'>
               <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" className='flex-grow focus:outline-none border-r'/>
               <BsFillMicFill  className='text-lg'/>
               <AiOutlineSearch className='text-xl text-gray-500 mr-3'/>
            </form>
    </div>
  )
}
