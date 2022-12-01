import React from 'react'

const Hero = ({ handleConnect }) => {
  return (
      <div className='flex items-center justify-around px-20' >
          <div className='w-1/2'>
              <img src="https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className='w-1/2 mx-20'>
              <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsa, inventore ex magnam ducimus culpa corrupti dolorum illo fugiat reprehenderit blanditiis? Tenetur eligendi repellat, dolorum quo vitae quisquam dolorem dolores.</h3> 
              <button onClick={handleConnect} className='mt-5 text-white bg-blue-500 rounded p-2 w-max text-sm'>connect</button>
          </div>
    </div>
  )
}

export default Hero
