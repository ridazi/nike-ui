
// import Image from 'next/image';
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <main>
//       <div className='bg-gray-100 h-10 w-full'></div>
//       <nav className="flex items-center justify-between p-4 bg-white text-black">
//         {/* Logo on the left */}
//         <div className="flex items-center">
//           <Image src="/nike-icon.png" alt="Logo" width={50} height={50} />
//         </div>

//         {/* Navbar links in the center */}
//         <ul className="flex space-x-6 justify-center flex-1">
//           <li>
//             <Link href="./" className="text-black hover:text-gray-500">
//               New & Featured
//             </Link>
//           </li>
//           <li>
//             <Link href="./" className="text-black hover:text-gray-500">
//               Men
//             </Link>
//           </li>
//           <li>
//             <Link href="./" className="text-black hover:text-gray-500">
//               Women
//             </Link>
//           </li>
//           <li>
//             <Link href="./" className="text-black hover:text-gray-500">
//               Kids
//             </Link>
//           </li>
//           <li>
//             <Link href="./" className="text-black hover:text-gray-500">
//               Sale
//             </Link>
//           </li>
//           <li>
//             <Link href="./" className="text-black hover:text-gray-500">
//               SNKRS
//             </Link>
//           </li>
//         </ul>
//         <div className="">
//             <input
//               type="text"
//               placeholder="Search..."
//               className=" bg-slate-100 px-4  w-40 py-2 border border-gray-300 rounded-full focus:outline-none  "
//             />
//             <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
//           </div>
//           <div className='ml-3 display-alAine'>
//           <Image src="/Heart Icon (1).png" alt="Logo" width={20} height={20} />
          
//           </div>
         
//       </nav>
//     </main>
//   );
// };

// export default Navbar;
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <main>
      <div className='bg-gray-100 h-10 w-full'></div>
      <nav className="flex items-center justify-between p-4 bg-gray-200 text-black">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Image src="/nike-icon.png" alt="Logo" width={50} height={50} />
        </div>

        {/* Navbar links in the center */}
        <ul className="flex space-x-6 justify-center flex-1">
          <li>
            <Link href="/new-featured" className="text-black hover:text-gray-500">
              New & Featured
            </Link>
          </li>
          <li>
            <Link href="/men" className="text-black hover:text-gray-500">
              Men
            </Link>
          </li>
          <li>
            <Link href="/women" className="text-black hover:text-gray-500">
              Women
            </Link>
          </li>
          <li>
            <Link href="/kids" className="text-black hover:text-gray-500">
              Kids
            </Link>
          </li>
          <li>
            <Link href="/sale" className="text-black hover:text-gray-500">
              Sale
            </Link>
          </li>
          <li>
            <Link href="/snkrs" className="text-black hover:text-gray-500">
              SNKRS
            </Link>
          </li>
        </ul>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-slate-100 px-4 w-40 py-2 border border-gray-300 rounded-full "
          />
          <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
        </div>
        <div className='ml-3'>
          <Image src="/Heart Icon (1).png" alt="Logo" width={20} height={20} />
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
