import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "สำนักปลัดกระทรวงการท่องเที่ยวและกีฬา",
    Average: 951.043669
  },
  {
    name: "กรมพลศึกษา",
    Average: 1919.652746
  },
  {
    name: "กรมการท่องเที่ยว",
    Average: 1839.638315
  },
  {
    name: "สถาบันการพลศึกษา",
    Average: 2174.127407
  }
];

export default class Example extends PureComponent {
  render() {
    return (
      <BarChart
        width={900}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Average" stackId="a" fill="#8884d8" />
        {/* <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
      </BarChart>
    );;
  }
}
