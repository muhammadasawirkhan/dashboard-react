import React from "react";
import { AlarmClock, Bell } from 'lucide-react';
import Goalstatus from "./goalstatus";

import { Outlet } from "react-router-dom";
import profile from "../../../assets/images/profile.png";
import { PieChart } from '@mui/x-charts/PieChart';


import Sidebar from "../../../Components/Sidebar";
import { Chartfigures } from "./Chartfigures";
import vector from "../../images/vector.png";
import vectorno1 from "../../images/vectorno1.png";
import vectorno2 from "../../images/vectorno2.png";








export default function Dashboard() {

  const weekData = {
    Mon: [1],
    Tue: [2],
    Wed: [3],
    Thu: [4],
    Fri: [5],
    Sat: [6],
    Sun: [7],

  }

  const totalWeeks = 2; // total number of weeks you want to generate

  for (let week = 1; week < totalWeeks; week++) {
    let dayIndex = 0;
    for (const day in weekData) {
      const nextValue = weekData[day][0] + week * 7;
      weekData[day].push(nextValue);
      dayIndex++;
    }
  }
  const flattened = [];
  const maxEntries = weekData.Mon.length; // assumes all days have same count

  for (let i = 0; i < maxEntries; i++) {
    for (const day of Object.keys(weekData)) {
      flattened.push({ day, number: weekData[day][i] });
    }
  }




  const goals = [
    {
      time: '10:00 AM',
      text: 'Headache release',
      duration: '07 days',
      goal_status: 'Goal Completed'
    },
    {
      time: '10:00 AM',
      text: 'Headache release',
      duration: '07 days',
      goal_status: 'Goal Completed'
    },
  ];


  const data = [
    { label: '3', value: 3, color: '#F16A77' }, // custom green
    { label: '7', value: 7, color: '#86FFCF' },   // orange
    { label: '10', value: 10, color: '#FFC6AF' },   // blue
  ];

  const total = data.reduce((sum, d) => sum + d.value, 0);

  // Convert value to angle
  let cumulativeAngle = 0;
  const radius = 100;
  const center = 120;

  const slices = data.map((d, i) => {
    const startAngle = cumulativeAngle;
    const angle = (d.value / total) * 360;
    const endAngle = startAngle + angle;
    cumulativeAngle += angle;

    const largeArc = angle > 180 ? 1 : 0;

    const startX = center + radius * Math.cos((Math.PI / 180) * startAngle);
    const startY = center + radius * Math.sin((Math.PI / 180) * startAngle);
    const endX = center + radius * Math.cos((Math.PI / 180) * endAngle);
    const endY = center + radius * Math.sin((Math.PI / 180) * endAngle);

    const pathData = `
      M ${center} ${center}
      L ${startX} ${startY}
      A ${radius} ${radius} 0 ${largeArc} 1 ${endX} ${endY}
      Z
    `;

    // For label inside each slice
    const midAngle = startAngle + angle / 2;
    const labelX = center + (radius / 2) * Math.cos((Math.PI / 180) * midAngle);
    const labelY = center + (radius / 2) * Math.sin((Math.PI / 180) * midAngle);

    return (
      <g key={i}>
        <path d={pathData} fill={d.color} stroke="#fff" strokeWidth="2" />
        <text
          x={labelX}
          y={labelY}
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="#000"
          fontSize="16"
          fontWeight="bold"
        >
          {d.label}
        </text>
      </g>
    );
  });

  const figure = [
    { img: vectorno2, number: '10', text: 'Total Goals' },
    { img: vectorno1, number: '7', text: 'Total Goals' },
    { img: vector, number: '3', text: 'Total Goals' }
  ]





  return (
    <div className="flex">
      {/* <Sidebar/> */}
      <div className="p-[1rem] ml-[20px]">
        <div className="flex flex-wrap mx-auto sm:w-[550px] sm:mr-[900px] lg:mr-[0px]  lg:w-[1330px] justify-between">
          <div>
            <h2 className="font-avenir text-[#FCC378] text-[24px] bold">Dashboard</h2>
          </div>
          <div className="flex w-[157px] h-[61px] bg-[#fff] shadow-md rounded-[30px]">

            <AlarmClock className="text-orange-300 w-[27.26px] h-[27.4px] mt-[20px] ml-[14px]" />
            <Bell className="text-gray-500 w-[27.26px] h-[27.4px] mt-[22px] ml-[12px]" />
            <div className="w-[35px] h-[35px] mt-[14px] ml-[14px]">
              <img src={profile} alt="" />
            </div>
          </div>
        </div>



        <div className="mt-[10px] sm:w-[550px] lg:w-[1188px] lg:h-[367px] bg-[#FFFFFF] border-[1px] border-[#FFE8DF] border-b-[10px] rounded-[16px]" style={{ boxShadow: "0 0 4px 0 rgba(252, 195, 104, 0.25)" }}>
          <div className="flex w-[1328px] pt-4px pl-4 h-[10px] mx-auto justify-between">
            <h1 className="text-[#FFC6AF] text-[24px]">Today's <span className="text-[#000]">Goals</span> to Achieve</h1>
          </div>
          <div className="mt-[30px] flex gap-4 p-4 overflow-x-auto">
            {flattened.map((item, index) => (
              <div key={index} className="flex flex-col items-center min-w-16">
                <div className="text-sm font-semibold text-[14px]">{item.day}</div>
                <div className="text-[#FCC378] mt-[10px] text-[18px] semibold">{item.number}</div>
              </div>
            ))}



          </div>
          <div className="block">
            {goals.map((goal, index) => (
              <Goalstatus
                key={index}
                time={goal.time}
                text={goal.text}
                duration={goal.duration}
                goal_status={goal.goal_status}
                variant={index === 1}
              />
            ))}
          </div>
          <div>
          </div>


          <Outlet /> {/* Renders child routes here */}
        </div>

        
          <div className="flex flex-wrap sm:block md:flex gap-[20px]">
            <div className="flex flex-wrap sm:w-[550px] lg:w-[1188px] mt-[12px] lg:h-[267px] bg-[#FFFFFF] border-[1px] border-[#FFE8DF] border-b-[10px] rounded-[16px]">
          <div className="justify-center items-center  pl-4">
            <div className="mt-[5px] ">
              <h1 className="text-[24px] text-[#FFC6AF] font-semibold">Statistics</h1>
            </div>
            <div className="sm:ml-[100px] lg:-mt-[20px] lg:ml-[10px]">
              <svg width="240" height="240">
                {slices}
              </svg>
            </div>
          </div>
            {figure.map((fig, index) => (
              <Chartfigures
                key={index}
                img={fig.img}
                number={fig.number}
                text={fig.text}
                
                iszero={index===0}
                isfirst={index === 1}
                issecond={index === 2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
