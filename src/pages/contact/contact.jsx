import React from 'react'
import  './contact.css'
import Contact_image from '../../image/contact_image.jpg'
export default function Contact() {
  let con_page_head = 'contacts';
  return (
    <div className='text-black m-8 text-center'>
         <h3 className='text-6xl'>{con_page_head.toUpperCase()}</h3>
         <div className='flex flex-row text-2xl m-9 '>
            <div className='flex flex-col items-center justify-center '>
                <img src={Contact_image} loading='lazy' alt="Contact page" className='rounded-full w-[200px] h-[200px] animate-spin  duration-2000' />
                <p className='text-black-400'>Use our contact form for all information requests or contact us directly using the contact information below</p>
                <p className='text-black-400'>Feel free to get in touch with us via email or phone</p>
            </div>
            <div>
                <h3>SIGN UP FOR THE NEWSLETTER</h3>
                <p className='text-gray-500'>Want to be the first to read our news? Subscribe to the newsletter to keep abreast of all events.</p>
                <div className=' rounded-md flex flex-row text-center '>
                  <input type="text " className='h-12  w-200px  bg-gray-200' placeholder='abc@gmail.com' />
                  <button className='bg-green-500 p-3 h-12 w-32 text-white' onClick={()=>alert("Server is busy")}>SUBMIT</button>
                </div>
            </div>
         </div>
    </div>
  )
}
