import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {

    console.log(feature);
    return (
        <p className='flex gap-2 mt-4'> <CircleCheckBig></CircleCheckBig> {feature}</p>
    );
};

export default PricingFeatures;