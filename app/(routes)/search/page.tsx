"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

const SearchPage = () => {

    const searchParams=useSearchParams();
    const query=searchParams.get("q");

  return (
    <div>SearchPage verileri : {query}</div>
  )
}

export default SearchPage