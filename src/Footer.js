import React from 'react'

function Footer() {
  return (
    <div className='bg-secondary d-flex justify-content-around py-4 text-light' >
        <div className='h1'>The Generics</div>
        <div className='d-flex justify-content-around'>
          <div className='mx-2'><img src='/icons/Facebook.png' alt="facebook"/></div>
          <div className='mx-2'><img src='/icons/Spotify.png' alt="youtube"/></div>
          <div className='mx-2'><img src='/icons/youtube.jpg' alt="spotify"/></div>
        </div>
      </div>
  )
}

export default Footer