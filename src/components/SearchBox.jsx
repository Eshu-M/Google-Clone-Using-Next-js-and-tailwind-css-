'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import {RxCross2} from 'react-icons/rx'
import { useSearchParams } from 'next/navigation';

export default function SearchBox() {
    const searchPrams=useSearchParams();
    const searchTerm=searchPrams.get("searchTerm") || "";
    const [input ,setInput]=useState( searchTerm || "")
    const router=useRouter();
    function handleSubmit(e){
          e.preventDefault();
          if (!input.trim()) return;
          router.push(`/search/web?searchTerm=${input}`);
        }
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex space-x-2 items-center border border-gray-200 px-6 py-3 ml-1 mr-1 sm:ml-10 sm:mr-5 flex-grow rounded-full shadow-md transition-shadow focus-within:shadow-md max-w-3xl'>
               <input onChange={(e)=>setInput(e.target.value)} value={input} placeholder='Search hear..' type="text" className='w-full focus:outline-none'/>
               <RxCross2 onClick={(e)=>setInput("")} className='text-2xl text-gray-500 cursor-pointer sm:mr-2'/>
               <BsFillMicFill  className='hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3'/>
               <AiOutlineSearch onClick={handleSubmit} className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer mr-3'/>
            </form>
    </div>
  )
}
