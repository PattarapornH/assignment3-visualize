import React, { Component } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: '2550', budget: 3400.000000,
    },
    {
        name: '2551', budget: 3645.000000,
    },
    {
        name: '2552', budget: 4439.246200,
    },
    {
        name: '2553', budget: 4113.141200,
    },
    {
        name: '2554', budget: 7017.533100,
    },
    {
        name: '2555', budget: 10264.545000,
    },
    {
        name: '2556', budget: 11925.956500,
    },
    {
        name: '2557', budget: 13807.085400,
    },
    {
        name: '2558', budget: 7931.825300,
    },
    {
        name: '2559', budget: 7136.752700,
    },
    {
        name: '2560', budget: 5940.481800,
    },
    {
        name: '2561', budget: 6622.910600,
    },
    {
        name: '2562', budget: 6074.997300,
    },
];

class Sum_budget extends Component {
    render() {
        return (
            <LineChart
                width={900}
                height={400}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
                <Line type="monotone" dataKey="budget" stroke="#82ca9d" />
            </LineChart>
        );
    }
}
export default Sum_budget;