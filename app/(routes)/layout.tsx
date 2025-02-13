import React from 'react'
import Header from './_components/Menu/Header'
import Footer from './_components/Footer'
import Hero from './_components/Hero'
import { Toaster } from '@/components/ui/toaster'


interface RouterProps {
    children: React.ReactNode
    }

const layout = ({children}: RouterProps) => {
  return (
    
    
    <div>
        <Header/>
        
        <div className='min-h-screen'>
        {children}

        <Toaster />

        </div>
        <Footer/>
        </div>

  )
}

export default layout