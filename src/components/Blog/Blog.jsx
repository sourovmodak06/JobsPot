import React from 'react';
import { Squares2X2Icon, ArrowRightIcon } from '@heroicons/react/24/solid'

const Blog = () => {
    return (
        <div className='px-14 py-20'>
            <div className='flex items-center'>
                <Squares2X2Icon className='w-6 h-6 mr-4 text-[#632ef5]' />
                <h2 className='text-3xl font-bold'>When should you use context api?</h2>
            </div>
            <div className='flex py-4'>
                <ArrowRightIcon className='w-6 h-6 ml-10 text-[#632ef5]' />
                <p className='font-medium ml-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cupiditate facilis corrupti consequatur consequuntur nihil ea explicabo ex corporis distinctio.</p>
            </div>
            <div className='flex items-center'>
                <Squares2X2Icon className='w-6 h-6 mr-4 text-[#632ef5]' />
                <h2 className='text-3xl font-bold'>What is custom hooks?</h2>
            </div>
            <div className='flex py-4'>
                <ArrowRightIcon className='w-6 h-6 ml-10 text-[#632ef5]' />
                <p className='font-medium ml-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cupiditate facilis corrupti consequatur consequuntur nihil ea explicabo ex corporis distinctio.</p>
            </div>
            <div className='flex items-center'>
                <Squares2X2Icon className='w-6 h-6 mr-4 text-[#632ef5]' />
                <h2 className='text-3xl font-bold'>What is useRef and What use is it?</h2>
            </div>
            <div className='flex py-4'>
                <ArrowRightIcon className='w-6 h-6 ml-10 text-[#632ef5]' />
                <p className='font-medium ml-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cupiditate facilis corrupti consequatur consequuntur nihil ea explicabo ex corporis distinctio.</p>
            </div>
            <div className='flex items-center'>
                <Squares2X2Icon className='w-6 h-6 mr-4 text-[#632ef5]' />
                <h2 className='text-3xl font-bold'>What is useMemo and What use is it?</h2>
            </div>
            <div className='flex py-4'>
                <ArrowRightIcon className='w-6 h-6 ml-10 text-[#632ef5]' />
                <p className='font-medium ml-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cupiditate facilis corrupti consequatur consequuntur nihil ea explicabo ex corporis distinctio.</p>
            </div>
        </div>
    );
};

export default Blog;