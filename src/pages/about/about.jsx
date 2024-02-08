import React from 'react'
import './about.css'
import AboutImg from '../../image/about-1-img.jpeg'

export default function about() {
  let texthd = 'They Love'
  let textp1 = 'I used to think poké was another word for salad. Now, I know it is SO MUCH MORE. Delicious'
  let textp1n = 'nina scavo'
  let textp2 = 'The only poké I\'ve found in the downtown area that uses only sustainable suppliers.'
  let textp2n = 'tina marantino'

  return (
    <div className='about-bg'>
      <div className='text-center  text-6xl'>
        <h1>{texthd}</h1>
      </div>
      <div className='grid grid-rows-1 justify-items-center gap-4   md:grid-cols-2'>
        <div className=" card text-center m-9 ">
          <img src={AboutImg} className='rounded-md' alt="" />
          <p className="heading">{textp1}</p>
          <p>{textp1n.toUpperCase()}</p>
        </div>
        <div className="card text-center m-9">
        <img src={AboutImg}  className='rounded-md' alt="" />
          <p className="heading">{textp2}</p>
          <p>{textp2n.toUpperCase()}</p>
        </div>
      </div>
    </div>
  )
}
