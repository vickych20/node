import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation()

  return (
      <div className='homepages'>
          <h1>Hello {location.state.id} and welcome to the home</h1>
          
    </div>
  )
}

export default Home