
// import Navbar from './components/Nevbar'
// import Footer from './components/Footer'
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs'
// import './globals.css'
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
  

//   return (
    
//     <ClerkProvider>
//       <html lang="en">
//         <body>
       
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
          
//           {children}
          
//           <Footer/>
//         </body>
//       </html>
//     </ClerkProvider>
//   )
import Navbar from './components/Nevbar'; 
import Footer from './components/Footer';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar /> 

          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>

          {children} {/* This will render child components */}
          
          <Footer /> {/* Footer is already added */}
        </body>
      </html>
    </ClerkProvider>
  );
}
