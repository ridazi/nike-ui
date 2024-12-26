// import React from 'react';
// import Image from 'next/image';
// const Hero = () => {
//   return (
//     <div className="bg-gray-100 h-screen flex justify-center  text-center p-4">
//       <div>
       
//         <p className="text-xl mb-4"> Hello Nike App Download the app to access everything Nike</p>
//         <h3 className="text-2xl font-semibold">Get your Great</h3>
       
//         <div className="mt-6">
//           <Image
//             src="/Frame (4).png" // Replace with your actual image path
//             alt="Nike App"
//             width={1000} // Set your image width
//             height={600} // Set your image height
//             className="mx-auto" // Centers the image horizontally
//           />
//         </div>
//         <p className='text-black justify-center'>First look</p>
//         <h1>Nike Air Max Plus</h1>
//       </div>
//     </div>
//   );
// };

// export default Hero;


'use client';  // Ensure this is at the top to mark the component as a client component
// import Form from './form';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {
  return (
    <div className="bg-gray-100 h-screen flex justify-center text-center p-4 relative">
      {/* Section for Image and Text */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="text-center mb-12">
        <Link href="/Form">
        <button  className='bg-black text-white rounded-2xl w-20'>join us</button>
      </Link>
         
          <p className="text-xl mb-4">Hello Nike App Download the app to access everything Nike</p>
          <h3 className="text-2xl font-semibold">Get your Great</h3>

          <div className="mt-6">
            <Image
              src="/Frame (4).png" // Replace with your actual image path
              alt="Nike App"
              width={1000}
              height={600}
              className="mx-auto"
            />
          </div>
          <p className="text-black justify-center mt-4">First look</p>
          <h1 className="font-semibold text-3xl">Nike Air Max Plus</h1>
        </div>
      </div>

      {/* Directly render the Cards component */}
      <div className="mt-20"> {/* Ensure there's enough space between text and cards */}
       
      </div>
      {/* <Form/> */}
    </div>
   
  );
};

export default Hero;
