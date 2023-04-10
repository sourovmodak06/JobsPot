import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Statistics = () => {
  const assignmentMarks = [
    {
      id: 1,
      title: "Assignment 1",
      mark: 57,
    },
    {
      id: 2,
      title: "Assignment 2",
      mark: 60,
    },
    {
      id: 3,
      title: "Assignment 3",
      mark: 60,
    },
    {
      id: 4,
      title: "Assignment 4",
      mark: 50,
    },
    {
      id: 5,
      title: "Assignment 5",
      mark: 60,
    },
    {
      id: 6,
      title: "Assignment 6",
      mark: 58,
    },
    {
      id: 7,
      title: "Assignment 7",
      mark: 60,
    },
    {
      id: 8,
      title: "Assignment 8",
      mark: 60,
    },
  ];

  return (
    <div>
      <h2 className="my-10 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[#9873FF] to-[#7E90FE]">Assignment Analytics</h2>
      <AreaChart
        width={1200}
        height={400}
        data={assignmentMarks}
        margin={{
            top: 20,
            right: 10,
            left: 50,
            bottom: 0,
          }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="mark" stroke="#9873FF" fill="#9873FF" activeDot={{ r: 8 }} />
      </AreaChart>
    </div>
  );
};

export default Statistics;
