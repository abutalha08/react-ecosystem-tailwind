import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const gymData = [
    { id: 1, name: "Rahim", weight: 70, calories: 250, workoutTime: 45 },
    { id: 2, name: "Karim", weight: 75, calories: 300, workoutTime: 50 },
    { id: 3, name: "Sabbir", weight: 68, calories: 220, workoutTime: 40 },
    { id: 4, name: "Tanvir", weight: 80, calories: 350, workoutTime: 60 },
    { id: 5, name: "Naim", weight: 72, calories: 270, workoutTime: 48 },
    { id: 6, name: "Imran", weight: 78, calories: 320, workoutTime: 55 },
    { id: 7, name: "Rakib", weight: 65, calories: 200, workoutTime: 35 },
    { id: 8, name: "Hasan", weight: 82, calories: 360, workoutTime: 65 },
    { id: 9, name: "Jahid", weight: 74, calories: 290, workoutTime: 52 },
    { id: 10, name: "Fahim", weight: 69, calories: 240, workoutTime: 42 }
];

const ResultsChart = () => {
    return (
        <div className="w-full h-96">
            <h2 className="text-xl font-bold text-center my-6">
                📊 Gym Performance Chart
            </h2>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={gymData}>
                    <Line dataKey="weight" stroke="green" strokeWidth={2} name="Weight (kg)" />
                    <Line dataKey="calories" stroke="blue" name="Calories" />
                    <Line dataKey="workoutTime" stroke="red" name="Workout Time (min)" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ResultsChart;