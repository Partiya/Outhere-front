import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import TextField from '@mui/material/TextField/TextField'
import '../Register/animations.css'
import axios from 'axios'

function Register() {


    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     );
     const validName = new RegExp(

        '^[a-zA-Z][0-9a-zA-Z .,-]*$'
    )
    const validUsername = new RegExp(

        '^[a-zA-Z][0-9a-zA-Z .,-]*$'
    )
    const validPassword = new RegExp(
        '^[A-Za-z0-9]{7,}$'
    )
    const[password,setPassword] = useState(String);
    const[reppassword,setReppassword] = useState(String);
    const[email,setEmail] = useState(String);
    const[username,setUsername] = useState(String);
    const[name,setName] = useState(String);
    const[namecolor,setNamecolor] = useState('')
    const[usernamecolor,setUsernamecolor] = useState('')
    const[nameerror,setnameerror] =useState(false)
    const[usernameerror,setUsernameerror] =useState(false)
    const[emailerror,setEmailerror] = useState(false)
    const[emailColor,setEmailcolor] = useState('')
    const[passworderror,setPassworderror] = useState(false)
    const[passwordcolor,setPasswordColor] = useState('')
    const[reppassworderror,setReppassworderror] = useState(false)
    const[reppasswordcolor,setReppasswordcolor] = useState('')
    const[acceptTerms,setAcceptTerms] = useState(false)
    let validatedEmail = validEmail.test(email)
    let validatedName = validName.test(name)
    let validatedPassword = validPassword.test(password)
    let validatedUsername = validUsername.test(username)
    const baseUrl = "http://192.168.1.39:8000/api/v1"
   async function handleRegister(){
        
    if(
        password === reppassword &&
        validatedEmail &&
        validatedPassword &&
        validatedName &&
        validatedUsername
    ){
        axios.post(`${baseUrl}/auth/register/`,
        {
            email : email,
            username : username,
            password : password,
            name : name,

        }
        ).then((response)=>{
            console.log(response.data)
        }
        )
    }




}



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
                                setName(null)
                                setEmail(null)
                                setPassword(null)
                                setReppassword(null)
                                setUsername(null)
                            }} className=''>
                                <AiOutlineClose/>
                            </button>
                        </div>
                        <div className=''>
                            <div className='w-1 h-1 mt-5'>

                            </div>
                            <TextField error={nameerror}   color={namecolor}  label="Name"  variant="outlined" className='w-[360px] h-[80px]'onChange={(e)=>{
                                setName(e.target.value)
                                
                              
                                if((validatedName)){
                                    setNamecolor('success')
                                    setnameerror(false)
                                    
                                }else{
                                   setnameerror(true)
                                   
                                }
                            }
                              
                            }/>
                            
                            <TextField error={usernameerror}    color={usernamecolor} label="Username"  className='w-[360px] h-[80px]'onChange={(e)=>{
                                setUsername(e.target.value)
                                
                             
                                if(validatedUsername){
                                    setUsernamecolor('success')
                                    setUsernameerror(false)
                                    
                                }else{
                                   setUsernameerror(true)
                                   
                                }
                            }
                              
                            }/>
                            <TextField label="Email" error={emailerror} color={emailColor}   variant="outlined" className='w-[360px] h-[80px]'onChange={(e)=>{
                               setEmail(e.currentTarget.value)
                              

                                if(validatedEmail){
                                    setEmailerror(false)
                                    setEmailcolor('success')
                                }else{
                                    setEmailerror(true)
                                }
                                
                            } 
                            }/>
                            <TextField error={passworderror} color={passwordcolor} helperText="password must be at least 8 characters"  label="Password"    variant="outlined" type="password" className='w-[360px] h-[80px]'onChange={(e)=>{
                               setPassword(e.currentTarget.value)
                                console.log(validatedPassword)
                                if(validatedPassword === true){
                                    setPassworderror(false)
                                    setPasswordColor("success")
                                }else{
                                    setPassworderror(true)
                                }
                                
                            } 
                            }/>
                            <TextField  label="Reapeat password"   variant="outlined" type="password" className='w-[360px] h-[60px]'onChange={(e)=>{
                                setReppassword(e.currentTarget.value)
                                
                           
                                
                            } 
                            }/>
                            <div className='flex items-center ml-2'>
                                <input type='checkbox' checked={acceptTerms} onChange={
                                    (e)=>{
                                        console.log(e.currentTarget.value)
                                        setAcceptTerms(!acceptTerms)
                                        console.log(acceptTerms)
                                    }
                                }></input>
                                <p className='text-gray-400 text-sm ml-2'>I have read and I accept the <span className='text-black '>terms</span> and <span className='text-black '>Conditions</span></p>
                            </div>
                            <div className='w-full flex justify-center mt-3'>
                            <button className='w-[300px] rounded-3xl h-[60px] bg-black text-white text-xl font-bold'onClick={()=>{
                                handleRegister()
                            }}>
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