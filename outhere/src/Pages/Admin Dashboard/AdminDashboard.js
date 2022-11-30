import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { TbUserCircle } from 'react-icons/tb';
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';
import {MdNavigateNext} from 'react-icons/md'
import RecentStory from '../../Components/RecentStories/RecentStory';
import LastRegister from '../../Components/Lastregisterdusers/Lastregisterusers';
import axios from 'axios'
import AdminHeader from '../../Components/AdminDashboardHeader/AdminHeader';
import '../Admin Dashboard/animations.css'
import { useNavigate } from 'react-router-dom';
function AdminDashboard() {

const baseUrl = "http://192.168.1.39:8000/api/v1"
const token = localStorage.getItem('token')
const date = new Date();
const [registerd,setRegisterd] = useState([])
const [story,setStory] = useState([])
const [page,setpage] = useState(1)
const [createdTime,setCreatedTime] = useState()
let navigate = useNavigate()
async function getstory(){
        axios.get(`${baseUrl}/admin/story/?page=${page}`, { headers: { Authorization: `Bearer ${token}` } }).then(
            (response) => {
                setStory(response.data.results)
                
                console.log(response.data.results)
            }
        )
}
async function getRegisterd(){

    axios.get(`${baseUrl}/admin/user/lastregisters`,{ headers: { Authorization: `Bearer ${token}` } }).then(
        (response)=>{
            if(response.status === 200){
                console.log(response.data.results)
                setRegisterd(response.data.results)
                setCreatedTime(response.data)
            }
        }
    ).catch(function(error){
        console.log(error.response.status)
    })
}
function handleTime(){
     const currentTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
     console.log(currentTime)
     console.log(createdTime.results.created_at)
   
    


}




useEffect(() => {
    getstory()
    
}, []);
useEffect(() => {
    getRegisterd()

}, [page]);

    return ( 
        <div className='fadein'>
              <Login/>
            <Register/>
                <AdminHeader pagename='Recent stories'/>
            <div className='w-full flex bg-black h-[70px] text-white mt-3 '>
                <div className='flex w-full  lg:w-[500px] items-center lg:justify-between justify-evenly lg:ml-24 ml-2'>
                    <button className='text-white  border-b h-[40px] font-medium '>
                        Recent Stories
                    </button>
                    <button className='text-gray-300 h-[40px]'onClick={()=>navigate('/admin/users')}>
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
            <div className='flex mt-14 mx-44  font-bold text-3xl   justify-between'>
                    
                  
            </div>
            <div className='flex-wrap lg:flex slideup justify-between lg:mx-20 mt-10'>
                    <div className=''> 
                    <p className='text-center text-3xl font-bold mb-5'>
                        Recent Stories
                    </p>
                        {
                            story.map((story,index)=>(
                                <div id={index}>
                                    <RecentStory title={story.story_title} description={story.description} username={story.user.username} />
                                </div>
                            )

                            )
                        }
                         <button className='w-full mx-8 mt-10 h-[50px] text- bg-[#EFEFEF] font-medium tracking-wide text-lg'onClick={()=>{
                            setpage(page+1)
                            
                         }}>
                         Load more stories
</button>
                    </div>
                    <div className='lg:w-[550px]   '>
                    <p className='text-center text-3xl font-bold mb-5'>
                        Last Registered Users
                    </p>
                    <div className='lg:w-[500px] lg:mb-0 mb-10 border lg:p-4 lg:mx-0 mx-4 px-3 pt-2'>
                        {
                            registerd.map((users,index)=>(
                                <div id={index}>
                               <LastRegister firstletter={users.name[0]} name={users.name} email={users.email}/>
                            </div>
                            ))
                        }
                   
                       
                   
                    </div>
                        
                
                    </div>
            </div>

        </div>
     );
}

export default AdminDashboard;