import React from 'react'
import './impact.css'
import PhotoFish from '../../image/Impact_Fairfish.png'
import PhotoLocalAg from '../../image/Impact_local.png'
import PhotoOrganic from '../../image/Impact_organic.png'
import PhotoPesticide from '../../image/Impact_pesticide.png'
import PhotoWaste from '../../image/Impact_waste.png'
import PhotoLogistics from '../../image/Impact_logistics.png'

export default function impact() {
  // to add heading in this page simply edit the "Detail_text"
  let Detail_text_hd = 'Oue Impact';
  let Detail_text_sb_hd = 'on the planet';
  //to add div element text edit "Detail_h4_hd_" " "
  let Detail_h4_hd_1 = 'fair fish'
  let Detail_h4_hd_2 = 'Local Agriculture'
  let Detail_h4_hd_3 = '100% organic'
  let Detail_h4_hd_4 = 'no prsticide'
  let Detail_h4_hd_5 = 'NO waste'
  let Detail_h4_hd_6 = 'Green logistics'
  // to add div sub heading edit
  let Detail_sb = 'Sample text. Click to select the text Element'


  return (
    <div>
      {/* HEADING */}
      <div className='text-center'>
        <h1 className='text-2xl'>{Detail_text_hd}</h1>
        <h3 className='text-4xl'>{Detail_text_sb_hd.toUpperCase()}</h3>
      </div>
      {/* DIV ELEMENT  */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 image m-8 lg:text-2xl sm:text-1xl' >
        {/* FIRST DIV */}
        <div className='flex flex-col justify-center items-center m-9 '>
          <img src={PhotoFish} alt="Fair Fish" />
          <h4>{Detail_h4_hd_1.toUpperCase()}</h4>
          <p className='text-black-300 mt-4'>{Detail_sb}</p>
        </div>
        {/* SECOND DIV */}
        <div className='flex flex-col justify-center items-center m-9'>
          <img src={PhotoLocalAg} alt="Fair Fish" />
          <h4>{Detail_h4_hd_2.toUpperCase()}</h4>
          <p className='text-black-300 mt-4'>{Detail_sb}</p>
        </div>
        {/* THIRD DIV */}
        <div className='flex flex-col justify-center items-center m-9'>
          <img src={PhotoOrganic} alt="Fair Fish" />
          <h4>{Detail_h4_hd_3.toUpperCase()}</h4>
          <p className='text-black-300 mt-4'>{Detail_sb}</p>
        </div>
        {/* FOURTH DIV */}
        <div className='flex flex-col justify-center items-center m-9'>
          <img src={PhotoPesticide} alt="Fair Fish" />
          <h4>{Detail_h4_hd_4.toUpperCase()}</h4>
          <p className='text-black-300 mt-4'>{Detail_sb}</p>
        </div>
        {/* FIFTH DIV */}
        <div className='flex flex-col justify-center items-center m-9'>
          <img src={PhotoWaste} alt="Fair Fish" />
          <h4>{Detail_h4_hd_5.toUpperCase()}</h4>
          <p className='text-black-300 mt-4'>{Detail_sb}</p>
        </div>
        {/* SIXTH DIV */}
        <div className='flex flex-col justify-center items-center m-9'>
          <img src={PhotoLogistics} alt="Fair Fish" />
          <h4>{Detail_h4_hd_6.toUpperCase()}</h4>
          <p className='text-black-300 mt-4'>{Detail_sb}</p>
        </div>
      </div>
    </div>
  )
}
