import React from 'react';
import {AiFillFacebook, AiFillInstagram, AiOutlineMenu, AiOutlineProfile, AiOutlineSearch, AiOutlineTwitter, AiOutlineYoutube} from 'react-icons/ai'
import {TbUserCircle} from 'react-icons/tb'
import {BsArrowRight} from 'react-icons/bs'
import ArticleCards from '../../Components/ArticleCards/Articlecards';
import FeaturedArticle from '../../Components/FeaturedArticle/FeaturedArticle';
import ArticleCard2 from '../../Components/ArticleCards/ArticleCards2';
function Blog() {
    return (
        <div className=''>
            <div className='w-full h-[90px] items-center  flex justify-between '>
                <div className=''>
                    <button>
                    <AiOutlineMenu className='w-[35px] h-[35px] ml-4 text-black'/>
                    </button>
                </div>
                <div>
                    <p className='text-xl'>OUT HERE</p>
                </div>
                <div className='flex items-center'>
                    <button>
                    <AiOutlineSearch className='w-[30px] h-[30px] mr-2'/>
                    </button>
                    <button>
                    <TbUserCircle className='w-[30px] h-[30px] mr-4'/>
                    </button>

                </div>
            </div>
                <hr className='w-full h-[1px]'></hr>
            <div className='w-full  flex justify-between '>
                <div>
                <p className='text-[140px] ml-14 p-0 m-0 font-normal '>Stories</p>
                </div>
                <div className='flex  items-end    mr-28'>
                    <button className='border-b-2 px-3 text-2xl pb-2 mx-3 border-b-black'>
                        Fantasy
                    </button>
                    <button className='border-b-2 px-3 text-2xl pb-2 mx-3'>
                        Romance
                    </button>
                    <button className='border-b-2 px-3 text-2xl pb-2 mx-3'>
                        Action
                    </button>
                    <button className='border-b-2 px-3 text-2xl pb-2 mx-3'>
                        Category
                    </button>
                    <button className='border-b-2 px-3 text-2xl pb-2 mx-3'>
                        Category
                    </button>
                </div>
            </div>
            <div className='w-full bg-gray-200 h-[1px]'>

            </div>
            <div className='w-full  flex justify-center'>
                <FeaturedArticle/>
            </div>
            <div className='mt-10 w-full flex flex-wrap justify-center'>
                <ArticleCards/>
                <ArticleCards/>
                <ArticleCards/>
                <ArticleCards/>
                <ArticleCards/>
                <ArticleCards/>
            </div>
            <div className='w-full h-[200px] justify-between flex items-center bg-[#1E1E1E] my-10'>
                <div className='mx-10 lg:mx-32 '>
                    <p className='font-bold text-white text-lg lg:text-[30px] '>
                    Want to learn more about how we help clients in Chemicals?
                    </p>
                </div>
                <div className='mx-10 lg:mx-32 '>
                    <button className='px-4 rounded-3xl lg:w-fit w-[180px] flex justify-center items-center h-[60px] bg-white'>
                        <p className='lg:text-2xl text-sm mr-2'>CTA TITLE HERE</p>
                        <div className='lg:w-[44px] flex justify-center items-center lg:ml-5 w-[40px] h-[40px] p-2 lg:h-[44px]  rounded-full bg-black'>
                            <BsArrowRight className='w-[30px] h-[30px] text-white'/>
                        </div>  
                    </button>   
                </div>

            </div>
            <div className='w-full  justify-evenly lg:justify-between flex mb-10'>
              <div>
              <p className='text-gray-400 lg:mx-32  '>Title for this section</p>
              </div>
                <div>
                <button className=' lg:mx-32 border-b-2  border-black font-bold text-xl '>
                    View All
                </button>
                </div>
            </div>
            <div className='flex flex-wrap w-full justify-center'>
            <ArticleCard2/>
            <ArticleCard2/>
            <ArticleCard2/>
            <ArticleCard2/>
            <ArticleCard2/>
            </div>
            <hr className='w-full bg-gray-600 my-10'>
            </hr>
            <div className='w-full  justify-around lg:justify-between flex mb-10'>
              <div>
              <p className='text-gray-400 lg:mx-32 '>Title for this section</p>
              </div>
                <div>
                <button className=' lg:mx-32 border-b-2 border-black font-bold text-xl '>
                    View All
                </button>
                </div>
            </div>
            <div className='flex flex-wrap w-full justify-center'>
            <ArticleCard2/>
            <ArticleCard2/>
            <ArticleCard2/>
            <ArticleCard2/>
            <ArticleCard2/>
            </div>
            <div className='w-full justify-center flex items-center mt-20 mb-20'>
                <button className='w-[220px] h-[70px] justify-between items-center border-black border rounded-[40px] flex px-2'>
                    <p className='text-2xl ml-2 font-bold'>Show More </p>
                    <div className='w-[50px] h-[50px] bg-black flex justify-center items-center rounded-full'>
                        <BsArrowRight className='text-white w-[40px] h-[40px]'/>
                    </div>
                </button>
            </div>
            <div className='w-full h-[130px] bg-black flex justify-between mb-10'>
                <img src='https://iili.io/HK66Hhv.png' className='object-contain ml-24 w-[200px] h-[130px]'></img>
                <div className='flex text-black items-center'>
                    <button className='p-3  mx-2 rounded-full bg-white hover:bg-blue-400 hover:text-white'>
                        <AiOutlineTwitter className='w-[25px] h-[25px]'/>
                    </button>
                    <button className='p-3  mx-2 rounded-full bg-white hover:bg-gradient-to-tr from-orange-400 via-red-900 to-fuchsia-500 hover:text-white'>
                        <AiFillInstagram className='w-[25px] h-[25px]'/>
                    </button>
                    <button className='p-3  mx-2 rounded-full bg-white hover:bg-blue-500 hover:text-white'>
                        <AiFillFacebook className='w-[25px] h-[25px]'/>
                    </button>
                    <button className='p-3  mx-2 mr-32 rounded-full bg-white hover:bg-red-500 hover:text-white'>
                        <AiOutlineYoutube className='w-[25px] h-[25px]'/>
                    </button>
                </div>
            </div>
            <div className='mb-20'>
          
                <div className='mx-20'>
                <p className='text-2xl font-bold mt-10'>The Daily Good Newsletter</p>
                </div>
                <div className='mx-20'>
                <p className='mt-2 text-gray-400 font-thin'>Never miss an insight. We'll email you when new articles are published.</p>
                </div>
                <div className='flex justify-between mb-5 mx-20 items-center'>
                    <div>
                    <input placeholder='Your email' className='w-[500px] absolute rounded-xl -z-10 mt-4 h-[40px] focus:outline-none px-3 bg-gray-200'>  
              
              </input>
              <button className=' z-10 w-[60px] absolute left-[510px] text-white  mt-[20px] rounded-2xl h-[33px] bg-black'>
                  Join
              </button>
                 
                    </div>
                    <div className=''>
                        <a className='mx-6 text-bold border-b px-2 pb-2 font-bold tracking-wide border-gray-500'>
                            Home
                        </a>
                        <a className='mx-6 text-bold border-b px-2 pb-2 font-bold tracking-wide border-gray-500'>
                            About us
                        </a>
                        <a className='mx-6 text-bold border-b px-2 pb-2 font-bold tracking-wide border-gray-500'>
                            Contact us
                        </a>
                        <a className='mx-6 text-bold border-b px-2 pb-2 font-bold tracking-wide border-gray-500'>
                            Privacy Policy
                        </a>
                        <a className='mr-32 text-bold border-b px-2 pb-2 font-bold tracking-wide border-gray-500'>Term of use</a>
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
        </div>
     );
}

export default Blog;