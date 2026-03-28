import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);
    // console.log(pricingData);
    return (
        <div>
            <h2 className='text-3xl text-center my-6'>Get our Membership</h2>
            <div className='grid justify-center md:grid-cols-2 md:justify-center lg:grid-cols-3'>
                {/* {
                    pricingData.map(pricing => <PricingCard
                        key={pricing.id}
                        pricing={pricing}>

                    </PricingCard>)
                } */}

                {/* using Daisy  */}
                {
                    pricingData.map(pricing => <DaisyPricingCard
                        key={pricing.id}
                        pricing={pricing}>

                    </DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;