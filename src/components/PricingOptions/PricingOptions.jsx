import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);
    // console.log(pricingData);
    return (
        <div>
            <h2 className='text-3xl text-center my-6'>Get our Membership</h2>
            <div className='grid md:grid-cols-3 grid-cols-1 mx-4 gap-6'>
                {
                    pricingData.map(pricing => <PricingCard
                        key={pricing.id}
                        pricing={pricing}>

                    </PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;