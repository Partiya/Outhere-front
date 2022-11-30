import React from 'react'
import { BsEye } from 'react-icons/bs';

function LastRegister(props) {
    return ( 
        <div>
        <div className='w-full h-[70px] flex justify-between items-center '>
            <div className='flex items-center'>
            <div className='w-[50px] text-xl flex items-center justify-center h-[50px] rounded-full lg:ml-5  text-white bg-[#707070]'>
               {props.firstletter}
            </div>
            <div className='ml-3 -mt-1'>
                    <p className='font-medium text-lg tracking-wide'>{props.name}</p>
                    <p className='text-sm text-gray-500 -mt-1'>{props.email}</p>
                </div>
            </div>
            <div className='flex items-center'>
                <p className='text-sm text-gray-400 lg:mr-3 mr-3'>{props.time}</p>
                <button className='w-[20px] h-[20px] '>
                    <BsEye className='w-[20px] h-[20px] '/>
                </button>
            </div>
           
        </div>
        <hr className='w-full  mt-3'></hr>
        </div>
     );
}

export default LastRegister;