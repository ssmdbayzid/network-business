import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid'
const Benefits = ({benefit}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className='w-5 h-5 mr-2 text-green-600'></CheckCircleIcon>
            <span>{benefit}</span>
        </div>
    );
};

export default Benefits;