'use client'
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

export default function CountryLookUp() {
    const [country,setCountry]=useState('United States');
    const [city,setCity]=useState('New York')
    useEffect(()=>{
        fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
        .then((res)=>res.json())
        .then((data)=>{
            setCountry(data.country);
            setCity(data.city);
        });
    })
  return (
    <div><p>{city} , {country}</p></div>
  )
}
