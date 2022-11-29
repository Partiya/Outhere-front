import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import TextField from '@mui/material/TextField/TextField'
import '../Register/animations.css'


function Register() {
    return ( 
        <div id='register' className='hidden absolute z-10 bg-black/70 backdrop-blur-sm  w-full h-full'>
            <div className='w-full flex justify-center mt-32'>
                    <div className='w-[400px] h-[600px] p-4 bg-white rounded-2xl'>
                        <div className='flex justify-between'>
                            <p className='text-xl font-bold'>Sign up</p>
                            <button onClick={()=>{
                                document.getElementById('register').classList.add('fadeout')
                                setTimeout( ()=>document.getElementById('register').classList.add('hidden'),1500)
                                setTimeout( ()=>document.getElementById('register').classList.remove('fadeout'),1500)
                            }} className=''>
                                <AiOutlineClose/>
                            </button>
                        </div>
                        <div className=''>
                            <div className='w-1 h-1 mt-5'>

                            </div>
                            <TextField label="Name" variant="outlined" className='w-[360px] h-[80px]'/>
                            
                            <TextField label="Username" variant="outlined" className='w-[360px] h-[80px]'/>
                            <TextField label="Email" variant="outlined" className='w-[360px] h-[80px]'/>
                            <TextField  label="Password" variant="outlined" type="password" className='w-[360px] h-[80px]'/>
                            <TextField  label="Reapeat password" variant="outlined" type="password" className='w-[360px] h-[60px]'/>
                            <div className='flex items-center ml-2'>
                                <input type='checkbox'></input>
                                <p className='text-gray-400 text-sm ml-2'>I have read and I accept the <span className='text-black '>terms</span> and <span className='text-black '>Conditions</span></p>
                            </div>
                            <div className='w-full flex justify-center mt-3'>
                            <button className='w-[300px] rounded-3xl h-[60px] bg-black text-white text-xl font-bold'>
                                Sign up
                            </button>
                            </div>
                            <div className='flex w-full mt-5 justify-center'>
                            <button className='text-sm text-gray-400'onClick={()=>{
                            document.getElementById('login').classList.remove('hidden')
                            document.getElementById('register').classList.add('hidden')
                            document.getElementById('register').classList.remove('fadeout')
                            }}>
                            Are you a member? <span className='text-black font-medium'>Login here.</span>
                            </button>
                            </div>
                           
                        </div>

                    </div>
            </div>
        </div>
     );
}

export default Register;