import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
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
    <div className="px-6 md:px-14">
      <h2 className="my-10 text-center text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[#9873FF] to-[#7E90FE]">
        Assignment Analytics
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={assignmentMarks}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="mark"
            stroke="#9873FF"
            fill="#9873FF"
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
