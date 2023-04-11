import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";

const JobCategory = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=> {
        fetch('job-category.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])

  return (
    <div className="py-16 md:py-32 px-6 md:px-14">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold">Job Category List</h2>
        <p className="py-4 font-medium text-[#757575]">
          Explore thousands of job opportunities with all the information you need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
        {
            category.map(list => <CategoryList
              key={list.id}
              list= {list}
            ></CategoryList>)
        }
      </div>
    </div>
  );
};

export default JobCategory;
