import Image from 'next/image'
import React from 'react'

const Frame = () => {
  return (
    <div >
      <div className="mt-6">
                  <Image
                    src="/Frame6.png" // Replace with your actual image path
                    alt="Nike App"
                    width={1000}
                    height={600}
                    className="mx-auto mt-20"
                  />
                </div>
                <div className='flex justify-center '>
                <h1 className='mt-10 text-black font-bold  justify-center  '>STEP WHAT FEELS GOOD</h1>
                
               
                </div>
                


    </div>
  )
}

export default Frame
