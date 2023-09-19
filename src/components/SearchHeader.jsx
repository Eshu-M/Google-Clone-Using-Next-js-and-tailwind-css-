'use client'
import Image from 'next/image'
import Link from 'next/link'
import {BsGearFill} from 'react-icons/bs'
import { TbGridDots } from 'react-icons/tb';
import {AiOutlineMenu} from 'react-icons/ai'
import SearchBox from './SearchBox';
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white'>
        <div className="">
        <div className='hidden sm:flex items-center justify-between w-full p-6 '>
            <div>
              <Link href={'/'}>
                <Image width={'120'} height={'40'} src="/Google-Logo.png" alt="Google Icon " />
              </Link>
            </div>

            <div className="flex-1">
              <SearchBox/>
            </div>

            <div className='hidden md:inline-flex space-x-2 text-lg'>
                <BsGearFill className='header-icon'/>
                <TbGridDots className='header-icon'/>
            </div>
                <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2'>Sign in</button>
        </div>
        <div className='flex-col items-center justify-center w-full p-6 sm:hidden'>
            <div className='flex justify-between items-center'>
              <AiOutlineMenu className='header-icon'/>
              <Link href={'/'}>
                <Image width={'100'} height={'40'} src="/Google-Logo.png" alt="Google Icon " />
              </Link>
              
              <button className='bg-blue-500 text-white px-3 py-1 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2'>Sign in</button>
            </div>
            <div className="mt-4">
              <SearchBox/>
            </div>
        </div>

        </div>
        <SearchHeaderOptions/>
    </header>
  )
}
