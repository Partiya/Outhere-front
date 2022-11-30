import React from 'react'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import '../RecentStories/animations.css'

function RecentStory(props) {
    return ( 
        <div className='lg:w-full mx-8 lg:h-[200px] lg:mb-0 mb-5 h-[220px] border scaleup '>
            <div className='lg:flex justify-between p-4'>
                <div className='lg:w-[700px]'>
                <p className='lg:text-2xl text-lg font-medium text-gray-500'>
            {props.title}
            </p>
            <p className='lg:mt-4 mt-1 text-[#707070] tracking-wide'>
           {props.description}
            </p>
                <div className='flex w-[160px] justify-between lg:w-[210px] text-sm mt-3 text-gray-500   float-left'>
                <p>{props.username}</p>
                    <p>{props.date}</p>
                    <p>|</p>
                    <p>{props.category} criminal</p>
                </div>
                  
                </div>
                <div className='flex justify-end w-full items-center mt-10'>
                        <hr className='h-[50px] lg:block hidden mr-3 w-[1px] bg-gray-300'>
                        
                        </hr>
                        <button className='w-[20px] mx-2  h-[20px] flex items-center justify-center'>
                            <AiOutlineDelete className='w-[20px] h-[20px]'/>
                        </button>
                        <button className='w-[20px] mx-2  h-[20px] flex items-center justify-center'>
                            <AiOutlineEdit className='w-[20px] h-[20px]'/>
                        </button>
                        <button className='w-[20px] mx-2  h-[20px] flex items-center justify-center'>
                            <AiOutlineEye className='w-[20px] h-[20px]'/>
                        </button>
                </div>
            </div>
           

        </div>
     );
}

export default RecentStory;