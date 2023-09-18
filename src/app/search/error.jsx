'use client'
import React, { useEffect } from 'react'

export default function error() {
    useEffect(()=>{
        console.log("Error: " ,error);
    }, [error]);
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4 '>Something Went Wrong </h1>
        <button className='text-blue-500' onClick={()=>reset()} >Try Again</button>
    </div>
  )
}