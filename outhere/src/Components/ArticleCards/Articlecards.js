import React from 'react';
import '../ArticleCards/animations.css'
function ArticleCards() {
    return (
        <div className='w-[495px] scaleup p-5 mx-5 mt-5 shadow-md  h-[300px] border opacity-50 hover:opacity-100 hover:shadow-lg'>
            <p className='text-[30px] font-medium mb-4'>
            Climate impact of plastics
            </p>
            <p className='text-gray-400'>Plastics are frequently criticized for everything from their toxicity to their contributions to ocean pollution, but they play an important role in reducing greenhouse gas emissions.
                
            </p>
            <p>
                USERNAME . DATE | CATEGORY
            </p>
        </div>
     );
}

export default ArticleCards;