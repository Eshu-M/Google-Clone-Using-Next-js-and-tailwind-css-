import React from 'react'

export default function loading() {
  return (
    <div className='flex flex-col sm:flex-row sm:space-x-4 pt-10 mx-2 lg:pl-52 max-w-6xl pb-42'>
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-48 mb-2.5 rounded-md bg-gray-200"></div>
        <div className="h-2 w-44 mb-2.5 rounded-md bg-gray-200"></div>
      </div>
      <div className="sm:space-x-4 hidden sm:inline-flex">
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-48 mb-2.5 rounded-md bg-gray-200"></div>
        <div className="h-2 w-44 mb-2.5 rounded-md bg-gray-200"></div>
      </div>
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-48 mb-2.5 rounded-md bg-gray-200"></div>
        <div className="h-2 w-44 mb-2.5 rounded-md bg-gray-200"></div>
      </div>
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-48 mb-2.5 rounded-md bg-gray-200"></div>
        <div className="h-2 w-44 mb-2.5 rounded-md bg-gray-200"></div>
      </div>
      </div>
      
    </div>
  )
}
