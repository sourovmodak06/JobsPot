import React from 'react';
import { Squares2X2Icon, ArrowRightIcon } from '@heroicons/react/24/solid'

const Blog = () => {
    return (
        <div className='px-14 py-20'>
            <div className='flex items-center'>
                <Squares2X2Icon className='w-6 h-6 mr-4 text-[#632ef5]' />
                <h2 className='text-3xl font-bold'>When should you use context API?</h2>
            </div>
            <div className='flex py-4'>
                <ArrowRightIcon className='w-10 h-6 ml-10 text-[#632ef5]' />
                <p className='font-medium ml-4'>Can use the Context API in React when you need to manage global state, share data among components without prop drilling, implement theming or styling, manage locale or language preferences, or manage user authentication and authorization. It provides a way to manage shared state in a more efficient and scalable manner in React applications.</p>
            </div>
            <div className='flex items-center'>
                <Squares2X2Icon className='w-6 h-6 mr-4 text-[#632ef5]' />
                <h2 className='text-3xl font-bold'>What is a custom hook?</h2>
            </div>
            <div className='flex py-4'>
                <ArrowRightIcon className='w-6 h-6 ml-10 text-[#632ef5]' />
                <p className='font-medium ml-4'>Custom hooks are a powerful tool in React that promote code reusability, abstraction, and separation of concerns, making it easier to build scalable and maintainable React applications.</p>
            </div>
            <div className='flex items-center'>
                <Squares2X2Icon className='w-6 h-6 mr-4 text-[#632ef5]' />
                <h2 className='text-3xl font-bold'>What is useRef?</h2>
            </div>
            <div className='flex py-4'>
                <ArrowRightIcon className='w-10 h-6 ml-10 text-[#632ef5]' />
                <p className='font-medium ml-4'>useRef is used in React for creating mutable references to DOM elements or storing mutable values that need to persist across render cycles without triggering component re-renders. It is commonly used for accessing and manipulating the DOM directly, handling imperative actions, and optimizing performance by avoiding unnecessary re-renders.</p>
            </div>
            <div className='flex items-center'>
                <Squares2X2Icon className='w-6 h-6 mr-4 text-[#632ef5]' />
                <h2 className='text-3xl font-bold'>What is useMemo?</h2>
            </div>
            <div className='flex py-4'>
                <ArrowRightIcon className='w-10 h-6 ml-10 text-[#632ef5]' />
                <p className='font-medium ml-4'>useMemo is used in React to memoize the result of a computation and return the memoized result when the inputs to that computation have not changed, thereby optimizing performance by reducing redundant calculations. It is commonly used for expensive operations, dependency tracking, and performance optimization in functional components.</p>
            </div>
        </div>
    );
};

export default Blog;