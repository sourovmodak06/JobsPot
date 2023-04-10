import React from 'react';
import HomeHeader from './HomeHeader';
import JobCategory from './JobCategory';
import FeaturedJobs from './FeaturedJobs';



const Home = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;