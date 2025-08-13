import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import './App.css'
import Build from './components/Build'
import Article from './components/Article'
import Table from './components/Table'
import Aside from './components/Aside'
import Footer from './components/Footer'

function App() {


  return (
    <>
     <Navbar/>
    <Hero/>
       <Build/>
    <div className='container md:flex my-8 mx-auto max-w-[1200px]'>
  <main className='flex-1' >
     <Article/>
    <Table/>
    </main> 
    <Aside/>
    </div>
    <Footer/>
    </>
  )
}

export default App
