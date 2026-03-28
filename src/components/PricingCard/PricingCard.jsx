import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    // console.log(pricing);
    const {name,price,description,features} = pricing;
    return (
        <div className='flex flex-col border border-blue-800 rounded-2xl p-4 text-black space-y-8 bg-blue-300'>
            {/* card Header  */}
            <div>
                <h1  className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>

            {/* Card body  */}
            <div className='bg-blue-400 rounded-2xl p-4 flex-1'>
                <p className='mb-6'>{description}</p>

                {
                    features.map((feature,index) => <PricingFeatures key={index} feature = {feature}></PricingFeatures>)
                }
            </div>
            {/* Button  */}
            <button className="btn w-full">Subscribe</button>
            
        </div>
    );
};

export default PricingCard;