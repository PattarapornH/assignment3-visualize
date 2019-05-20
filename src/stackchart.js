import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: "2550", TourismAndSports: 399.2097, SportAndRecreation: 654.4969, TourismDevelopment: 663.0308, PhysicalEducation: 1683.2626
    },
    {
        name: "2551", TourismAndSports: 437.4953, SportAndRecreation: 699.2109, TourismDevelopment: 688.2617, PhysicalEducation: 1820.0321
    },
    {
        name: "2552", TourismAndSports: 818.3279, SportAndRecreation: 737.1717, TourismDevelopment: 786.0635, PhysicalEducation: 2097.6831
    },
    {
        name: "2553", TourismAndSports: 608.2161, SportAndRecreation: 832.9235, TourismDevelopment: 741.0726, PhysicalEducation: 1930.929
    },
    {
        name: "2554", TourismAndSports: 1546.1861, SportAndRecreation: 1887.5616, TourismDevelopment: 1569.1006, PhysicalEducation: 2014.6848
    },
    {
        name: "2555", TourismAndSports: 1622.8008, SportAndRecreation: 3858.0925, TourismDevelopment: 2623.8189, PhysicalEducation: 2159.8328
    },
    {
        name: "2556", TourismAndSports: 1451.9125, SportAndRecreation: 4166.7834, TourismDevelopment: 3932.5666, PhysicalEducation: 2374.704
    },
    {
        name: "2557", TourismAndSports: 1272.4315, SportAndRecreation: 5255.0813, TourismDevelopment: 4933.1978, PhysicalEducation: 2346.3748
    },
    {
        name: "2558", TourismAndSports: 1154.657, SportAndRecreation: 1612.8714, TourismDevelopment: 2817.3736, PhysicalEducation: 2346.9233
    },
    {
        name: "2559", TourismAndSports: 1087.7355, SportAndRecreation: 1411.683, TourismDevelopment: 1899.9213, PhysicalEducation: 2737.4129
    },
    {
        name: "2560", TourismAndSports: 692.141, SportAndRecreation: 1361.0434, TourismDevelopment: 1236.2074, PhysicalEducation: 2651.09
    },
    {
        name: "2561", TourismAndSports: 371.8843, SportAndRecreation: 1343.7178, TourismDevelopment: 249.6015, PhysicalEducation: 1836.2297
    },
    {
        name: "2562", TourismAndSports: 900.57, SportAndRecreation: 1134.8483, TourismDevelopment: 1775.0818, PhysicalEducation: 2264.4972
    },
];

export default class barchart extends PureComponent {
    render() {
        return (
            <BarChart
                width={900}
                height={400}
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 20,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="TourismAndSports" fill="#8884d8" />
                <Bar dataKey="SportAndRecreation"  fill="#82ca9d" />
                <Bar dataKey="TourismDevelopment"  fill="#ffc658" />
                <Bar dataKey="PhysicalEducation"  fill="#aad6d8" />
            </BarChart>
        );
    }
}
