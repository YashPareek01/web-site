import React from 'react'
import './home.css'
import homeBackground from '../../image/bg-image-home.jpg'

export default function home() {
  let texth1 = 'Poke Bowls'
  let texth3 = 'fresh ,healthy and tasty';
  return (
    <div style={{ backgroundImage: `url(${homeBackground}) `, height: '95vh', width: '100vw' }} className='bg-center bg-cover bg-no-repeat  flex items-center justify-center ' >
      <div className='background'></div>
      <div className='text-white  mt-9 p-8 flex flex-col items-center justify-center leading-normal z-10 content'>
        <h1 className='text-9xl'>{texth1}</h1>
        <h2 className='text-4xl'>{texth3.toUpperCase()}</h2>
        <button className='bg-green-500 h-12 w-32 border rounded-md' onClick={() => alert('Please try after some time')}>View More</button>
      </div>
    </div>
  )
}
