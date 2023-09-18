'use client'
import React from 'react'
import { AiOutlineSearch ,AiOutlineCamera } from 'react-icons/ai'
import { usePathname, useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
export default function SearchHeaderOptions() {
    const searchPrams=useSearchParams();
    const searchTerm=searchPrams.get("searchTerm");
    const router=useRouter();
    const pathName=usePathname();
    function selectTab(tab){
        router.push(`/search/${tab === "All" ? "web" : "images"}?searchTerm=${searchTerm} `)
    }
  return (
    <div className='flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm'>
            <div onClick={()=>selectTab("All")} className={`flex items-center space-x-1 select-none border-b-2 border-transparent active:text-blue-500 pb-3 px-2 hover:cursor-pointer ${pathName==="/search/web" && "!text-blue-600 !border-blue-600"}`}>
               <AiOutlineSearch className='text-md'/>
               <p>All</p>
            </div>

            <div onClick={()=>selectTab("Images")} className={`flex items-center space-x-1 border-b-2 border-transparent active:text-blue-500 pb-3 px-2 hover:cursor-pointer ${pathName==="/search/images" && "!text-blue-600 !border-blue-600"} select-none`}>
               <AiOutlineCamera className='text-md'/>
               <p>Images</p>
            </div>
    </div>
  )
}
