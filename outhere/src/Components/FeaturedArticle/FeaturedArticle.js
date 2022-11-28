import React from 'react';


function FeaturedArticle(props) {
    return (
        <div className='w-4/5 border mt-20 pt-5 px-10'>
            <p className='text-gray-400 mt-2 text-lg'>Featured Article</p>
            <p className='text-[30px] font-bold mt-3'>
            Climate impact of plastics
            </p>
            <p className='mt-5'>
            Plastics are frequently criticized for everything from their toxicity to their contributions to ocean pollution, but they play an important role in reducing greenhouse gas emissions. Plastics are frequently criticized for everything from their toxicity to their contributions to ocean pollution, but they play an important role in reducing greenhouse gas emissions.
            Plastics are frequently criticized for everything from their toxicity to their contributions to ocean pollution, but they play an important role in reducing greenhouse gas emissions. Plastics are frequently criticized for everything from their toxicity to their contributions to ocean pollution, but they play an important role in reducing greenhouse gas emissions.
            </p>
            <div className='flex mt-5 mb-3 text-sm text-gray-300'>
                <p>. USERNAME . DATE | CATEGORY</p>
            </div>
        </div>
     );
}

export default FeaturedArticle;