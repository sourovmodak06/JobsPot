import React from 'react';
import personImg from '../images/P3OLGJ1 copy 1.png';

const Home = () => {
    return (
        <div className='flex justify-between gap-5 px-14 bg-gradient-to-l from-[#7e90fe0d] to-[#9873ff0d]'>
            <div className='w-[35%]'>
                <h2 className='text-6xl font-extrabold leading-snug'>One Step Closer To Your <span className='text-transparent bg-clip-text bg-gradient-to-l from-[#9873FF] to-[#7E90FE]'>Dream Job</span></h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="mt-7 bg-gradient-to-l from-[#7E90FE] to-[#9873FF] text-white py-2 px-4 text-xl font-extrabold rounded-lg">Get Started</button>
            </div>
            <div>
                <img className='h-[450px]' src={personImg} alt="Person-Img" />
            </div>
        </div>
    );
};

export default Home;