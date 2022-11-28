import React from 'react';
import {AiOutlineMenu, AiOutlineProfile, AiOutlineSearch} from 'react-icons/ai'
import {TbUserCircle} from 'react-icons/tb'
import ArticleCards from '../../Components/ArticleCards/Articlecards';
import FeaturedArticle from '../../Components/FeaturedArticle/FeaturedArticle';
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
        </div>
     );
}

export default Blog;