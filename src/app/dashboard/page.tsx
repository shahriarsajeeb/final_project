'use client'
import DashboardOne from "@/assets/svgs/dashboard1";
import DashboardTwo from "@/assets/svgs/dashboard2";
import DashboardThree from "@/assets/svgs/dashboard3";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const statsCards = [
  {
    title: "Transactions",
    value: "96",
    bg: "#ECF2FF",
    textColor: "#5D87FF",
    icon: <DashboardOne />,
  },
  {
    title: "Chiffre du mois",
    value: "3,650",
    bg: "#FEF5E5",
    textColor: "#FFAE1F",
    icon: <DashboardTwo />,
  },
  {
    title: "Paiements refusés",
    value: "696",
    bg: "#FBF2EF",
    textColor: "#FA896B",
    icon: <DashboardThree />,
  },
];

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
  { name: "Jul", value: 700 },
];

const Page = () => {
  return (
    <div className="space-y-6 p-4 md:w-[85%] mx-auto">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">Welcome back to your dashboard</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {statsCards?.map((card, index) => (
          <div
            className="p-4 h-[200px] rounded-lg"
            key={index}
            style={{ backgroundColor: card.bg }}
          >
            <div className="w-full justify-center flex py-2">{card.icon}</div>
            <h3
              className="text-center font-JakartaSans font-medium py-2"
              style={{
                color: card.textColor,
              }}
            >
              {card.title}
            </h3>
            <h3
              className="text-center text-2xl font-JakartaSans font-semibold py-2"
              style={{
                color: card.textColor,
              }}
            >
              {card.value}
            </h3>
          </div>
        ))}
      </div>

      {/* charts */}
      <div className="w-full p-4 bg-white">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Revenue Overview
        </h3>
        <div className="h-80">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray={"3 3"} />
              <XAxis dataKey={"name"} />
              <YAxis />
              <Tooltip />
              <Area
                type={"monotone"}
                dataKey={"value"}
                stroke="#3b82f6"
                fill="#93c5fd"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Page;
