import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FitnessChart = ({ fitnessPromise }) => {

    const fitnessResponse = use(fitnessPromise);
    // console.log(fitnessResponse);

    const fitnessData = fitnessResponse.data;

    // Data processing for the chart 
    const fitnessChartData = fitnessData.map(fitnessData => {
        const fitness = {
            id: fitnessData.id,
            name: fitnessData.name,
            weight: fitnessData.fitness.weight,
            calories: fitnessData.fitness.calories,
            workoutTime: fitnessData.fitness.workoutTime

        }

        const average = (fitness.weight + fitness.calories + fitness.workoutTime) / 3;
        fitness.average = average;

        return fitness;


    })

    // console.log(fitnessChartData);


    return (

            <div className="w-full h-96 mt-28">
                <h2 className="text-xl font-bold text-center mb-4">
                    Fitness Overview
                </h2>

                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={fitnessChartData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        <Bar dataKey="weight" fill="#4F46E5" name="Weight (kg)" /> 
                        <Bar dataKey="calories" fill="#10B981" name="Calories" />       
                        <Bar dataKey="workoutTime" fill="#F59E0B" name="Workout Time (min)" /> 
                        <Bar dataKey="average" fill="#EF4444" name="Average" />          

                    </BarChart>
                </ResponsiveContainer>
            </div>

        
    );
};

export default FitnessChart;