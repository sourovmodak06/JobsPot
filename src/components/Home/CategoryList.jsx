import React from 'react';

const CategoryList = ({list}) => {
    const {title,img,availableJob} = list;
    return (
        <div className='bg-gradient-to-l from-[#7e8ffe23] to-[#9873ff2a] p-10 rounded-lg'>
            <img src={img} alt="Category-Img" className='bg-gradient-to-l from-[#7e8ffe23] to-[#9873ff2a] p-3 rounded-lg'/>
            <h2 className='text-xl font-extrabold text-[#474747] pt-7'>{title}</h2>
            <p className='text-[#A3A3A3] font-medium'>{availableJob}</p>
        </div>
    );
};

export default CategoryList;