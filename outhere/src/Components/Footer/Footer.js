import React from 'react'


function Footer() {
    return ( 
        <div className='mb-20'>
          
                <div className='mx-20'>
                <p className='text-2xl font-bold mt-10'>The Daily Good Newsletter</p>
                </div>
                <div className='mx-20'>
                <p className='mt-2 text-gray-400 font-thin'>Never miss an insight. We'll email you when new articles are published.</p>
                </div>
                <div className='lg:flex  lg:flex-nowrap block  lg:justify-between  mb-5 mx-20 items-center'>
                    <div className='flex mt-5 items-center'>
                    <input placeholder='Your email' className='lg:w-[500px] w-[300px]  rounded-l-xl -z-10  h-[40px] focus:outline-none px-3 bg-gray-200'>  
              
              </input>
              <button className='  w-[60px]   text-white   rounded-r-xl h-[40px] bg-black'>
                  Join
              </button>
                 
                    </div>
                    <div className='block mt-10 lg:flex'>
                    <div  className='lg:mt-0 mt-3 '>
                        <a className='mx-6 text-bold border-b px-2 pb-2 font-bold tracking-wide border-gray-500'>
                            Home
                        </a>
                        </div >
                        <div className='lg:mt-0 mt-3'>
                            
                        <a className='mx-6 text-bold border-b px-2 pb-2 font-bold tracking-wide border-gray-500'>
                            About us
                        </a>
                        </div>
                        <div  className='lg:mt-0 mt-3'>
                        <a className='mx-6 text-bold border-b px-2 pb-2 font-bold tracking-wide border-gray-500'>
                            Contact us
                        </a>
                        </div>
                        <div  className='lg:mt-0 mt-3'>

                        <a className='mx-6 text-bold border-b px-2 pb-2 font-bold tracking-wide border-gray-500'>
                            Privacy Policy
                        </a>
                        </div>
                        <div  className='lg:mt-0 mt-3'>

                        <a className='mx-6 text-bold border-b px-2 pb-2 font-bold tracking-wide border-gray-500'>
                         Term of use
                         </a>
                            </div>
                      
                    </div>
                     
                     
                 
                 

                
                </div>
                <hr className='w-full mt-24'>
                </hr>
                <div className='flex w-full  justify-between'>
                    <p className='mt-10 mx-20 text-gray-400'>
                    Copyright  © 1996-2022  Company Name
                    </p>
                    <p className='mt-10 mx-20 text-gray-400'>
                    You may not use images or content from this site without written permission.
                    </p>
                </div>
                
            </div>
     );
}

export default Footer;