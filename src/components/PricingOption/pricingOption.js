import React from 'react';
import Benefits from '../Benefits/Benefits'
import { ArrowRightIcon } from '@heroicons/react/solid'


const pricingOption = (props) => {

    const { name, price, benefits } = props.option
    return (
        <div className='bg-white p-3 rounded'>
            <h1 className='text-3xl p-2 rounded bg-indigo-300'>{name}</h1>
            <span className='text-5xl font-bold'>{price}</span>
            <span>/mo</span>

            <div>
                <p className='text-left font-semibold text-2xl'>Benefits:</p>
                {
                    benefits.map( benefit => <Benefits benefit={benefit}></Benefits>)
                }
            <div>
            <button className='bg-green-600 flex justify-center items-center text-2xl text-white font-semibold hover:text-green-800 mt-5  py-2 w-full rounded'>Buy Now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon></button> 
            </div>
                
                
            </div>
        </div>
    );
};

export default pricingOption;