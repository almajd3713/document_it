import React from 'react';
import Login from '../components/ui/single_use/Login';
import { Navbar } from '@/components/ui/multiple_uses/navbar';
function page() {
  return (
    <>
    <div className='bg-mygrey'>
      <div className="sticky top-0 w-full z-50  p-4">
                    <div className="flex justify-center">
                      <Navbar />
                    </div>
                  </div>
                  <div 
      className="relative h-screen w-screen bg-cover bg-center flex items-center justify-center bg-mygrey"
    >
      
      Home
    </div>
    </div>
    
    
  </>
  );
}

export default page;