import React from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

const ResultsBarChart = () => {
    return (
        <div className="w-full h-96 mt-30">
            <h2 className="text-xl font-bold text-center mb-4">
                📊 Gym Performance Bar Chart
            </h2>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={gymData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="weight" fill="#8884d8" name="Weight (kg)" />
                    <Bar dataKey="calories" fill="#82ca9d" name="Calories" />
                    <Bar dataKey="workoutTime" fill="#ff7300" name="Workout Time (min)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ResultsBarChart;