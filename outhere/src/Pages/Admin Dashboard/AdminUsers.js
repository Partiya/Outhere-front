import React from 'react'
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../../Components/AdminDashboardHeader/AdminHeader';

function AdminUsers() {
    let navigate =useNavigate()
    return ( 
        <div className='fadein'>
            <AdminHeader pagename='Users'/>
            <div className='w-full bg-black flex h-[70px] mt-3'>
            <div className='flex w-full  lg:w-[500px] items-center lg:justify-between justify-evenly lg:ml-24 ml-2'>
                    <button className='text-gray-300   h-[40px]  'onClick={()=>navigate('/admin/recent_stories')}>
                        Recent Stories
                    </button>
                    <button className='text-white border-b h-[40px]'onClick={()=>navigate('/admin/users')}>
                        Users
                    </button>
                    <button className='text-gray-300 h-[40px] '>
                        Comments
                    </button>
                    <button className='text-gray-300 h-[40px] '>
                       Categories
                    </button>
                </div>
            </div>
            <div className='mx-24 w-full mt-10 bg-red-500 h-2'>

                </div>
        </div>
     );
}

export default AdminUsers;