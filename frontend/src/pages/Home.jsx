import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Hero from '../components/Hero'
import { useProduct } from '../contexts/ProductContext'

function Home() {
  const { user,profile } = useAuth()
  const { products } = useProduct()
  
  return (
    <>

      <Hero />

    </>

  )
}

export default Home