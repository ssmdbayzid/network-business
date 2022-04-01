import React from 'react';
import PricingOption from '../PricingOption/pricingOption';

const Pricing = () => {

    const pricingOptions = [
        { id: 1, name: 'Free', price: 0, benefits: [
            'lifetime free',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ] },
        { id: 2, name: 'Regular', price: 9.99, benefits: [
            'everything on free',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ] },
        { id: 3, name: 'Premium', price: 19.99,benefits: [
            'Premium on free',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ] }

    ]
    return (
        <div className='text-center h-100 p-10 bg-blue-300'>
            <h2 className='text-5xl text-cyan-900 font-bold font-serif text-center bold'>Best deal of the town</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maiores architecto vero! Iure molestias quo error magnam quasi rem tempore.</p>

            <div className='grid md:grid-cols-3 gap-8 rounded '>
                {
                    pricingOptions.map(option =>
                        <PricingOption
                            key={option.id}
                            option={option}
                        ></PricingOption>)
                }
            </div>

        </div>
    );
};

export default Pricing;