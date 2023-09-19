import WebSearchResults from '@/components/WebSearchResults';
import Link from 'next/link';
import React from 'react'
import { resolve } from 'styled-jsx/css';

export default async function WebSearchPage({ searchParams }) {
  const startIndex = searchParams.start || 1;
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.apiKey}&cx=${process.env.cx}&q=${searchParams.searchTerm}}&start=${startIndex}`
  );

  if (!response.ok){
    throw new Error("Something went wrong")
  }
  const data = await response.json();

  const results = data.items;

  if(!results){
    return <div className='flex flex-col justify-center items-center pt-10'>
      <h1 className='text-3xl mb-4'>No results found</h1>
      <p className='text-lg'>
        Try searching for something else or go back to homepage{" "}
        <Link className='text-blue-500' href={'/'}>
           Home
        </Link>
      </p>
    </div>
  }
  return <> {results && <WebSearchResults results={data}/>}</>;
}
