import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { MdNavigateNext } from 'react-icons/md';
import { TbUserCircle } from 'react-icons/tb';

function AdminHeader(props) {
    return ( 
        <div>
            <div className='w-full lg:h-[90px] h-[50px] items-center  flex justify-between '>

<div className='lg:w-[800px]'>
    <button>
    <AiOutlineMenu className='lg:w-[35px] w-[35px] h-[35px] lg:h-[35px] lg:ml-4 ml-1 text-black'/>
    </button>
</div>
<div className='w-full lg:flex hidden items-center justify-center  '>
    <p className='lg:text-xl text-[8px] text-center' >OUT HERE</p>
</div>
<div className='flex lg:w-[800px] lg:justify-end  items-center'>
    <div  className='flex lg:mr-2 float-right items-center'>
        <button>

        </button>
        <input id='search' placeholder='Category , Book name , ....' className='w-0 font-normal tracking-wide focus:outline-none   bg-gray-200 rounded-l-xl h-[40px]'>
        </input>
        <button  onClick={(e)=>{
            document.getElementById('search').classList.add('trnsleft')
            document.getElementById('search').classList.add('pl-2')
            e.currentTarget.classList.add('bg-gray-200')
            e.currentTarget.classList.add('rounded-r-xl')
        }}>
    <AiOutlineSearch className='w-[40px] h-[40px]    '/>
    </button>
    </div>
  
    <button onClick={()=>{
        document.getElementById('login').classList.remove('hidden')
        document.getElementById('login').classList.add('fadein')
        document.getElementById('login').classList.remove('fadeout')
        document.getElementById('register').classList.remove('fadeout')
    }
}>
    <TbUserCircle className='w-[40px] h-[40px] mr-4'/>
    </button>

</div>
</div>
<hr className='w-full'></hr>
<div>
<p className='text-3xl lg:ml-24 ml-5 mt-5 font-bold'>
    Admin
</p>
</div>
<div className='flex lg:ml-24 ml-5 mt-3 items-center'>
<a href='/' className='text-sm text-gray-400 font-medium'>Home</a>
<MdNavigateNext/>

<a className='text-sm text-gray-400 font-medium'>Admin</a>
<MdNavigateNext/>

<a className='text-sm font-medium '>{props.pagename}</a>
</div>
        </div>
     );
}

export default AdminHeader;