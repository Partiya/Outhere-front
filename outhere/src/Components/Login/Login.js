import React, { useState } from 'react'
import TextField from '@mui/material/TextField/TextField'
import { AiOutlineClose } from 'react-icons/ai';
import '../Login/animations.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
    let navigate = useNavigate()
    const[username,setUsername] = useState()
    const[password,setPassword] = useState()
    const[error,seterror] = useState('')
    const[isError,setIsError] = useState(false)
    const[color,setcolor] = useState('')
    const[helper,sethelper] = useState('')
    const baseUrl = "http://192.168.1.39:8000/api/v1"
 function handlelogin(){
    console.log('test')
        axios.post(`${baseUrl}/auth/login/`,
        {
            email: username,
            password : password
        }
        ).then(
            (Response)=>{
             
                console.log(Response.data)
                localStorage.setItem('token',Response.data.tokens.access)
                if(Response.status === 200){
                    navigate('/admin/recent_stories')
                }
            }
        ).catch(function(error){
            if(error.response.status === 401){
                setIsError(true)
                sethelper('Incorrect inputs')
            }
        })
    }
    

    return ( 
            <div id='login' className='w-full hidden h-full fadein absolute z-10 backdrop-blur-sm  bg-black/70'>
                <div className='flex w-full justify-center mt-56 '>
                <div className='w-[450px] p-8 h-[470px] bg-white rounded-2xl'>
                <div className='flex justify-between'>
                <p className='font-bold text-xl mt-3  '>Login to the site</p>
                <button onClick={()=>
                {
                   
                    document.getElementById('login').classList.add('fadeout')    
                    document.getElementById('login').classList.remove('fadein')
                    setTimeout(() =>document.getElementById('login').classList.add('hidden') , 1500);
                
                }
                    
                    }>
                    <AiOutlineClose className='w-[20px] h-[20px]'/>
                </button>
                </div>
                
                <p className='mb-5 text-sm mt-2  font-medium'>Enter your user name and password.</p>
                <TextField error={isError} color={color} helperText={helper} id="outlined-basic" label="Email or username" variant="outlined" className='w-[380px] 'onChange={(e)=>setUsername(e.currentTarget.value)} />
                <div className='w-1 h-1 mb-4'>

                </div>
                <TextField  error={isError} color={color} helperText={helper}  id="outlined-basic" label="Password"   type="password" variant="outlined" className='w-[380px]  'onChange={(e)=>setPassword(e.currentTarget.value)} />
                <div className='flex items-center justify-between'>
                   <div className='flex items-center'>
                    <input type='checkbox' className='mt-4 w-[17px] h-[17px]'></input>
                    <p className='text-gray-400 text-base mt-4 ml-2'> Remember me</p>
                    </div>
                   <div>
                        <button className='mt-4 text-gray-400'>
                            Forgot password?
                        </button>
                   </div>
                </div>
                <p className='text-red-500 text-center'>{error}</p>
                <button className='w-full h-[60px] uppercase text-2xl font-thin rounded-2xl text-white bg-black mt-3' onClick={()=>{
                    handlelogin()
                }}>
                    Login
                </button>
                <div className='w-full flex justify-center'>
                    <button onClick={()=>{
                        document.getElementById('login').classList.add('hidden')
                        document.getElementById('register').classList.remove('hidden')
                    }} className='mt-4 text-gray-400'>Haven’t any account?<span className='text-black font-medium'> Sign up here.</span></button>
                </div>
                </div>
                </div>
            </div>
     );
}

export default Login;