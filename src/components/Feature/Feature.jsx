import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Feature = ({benefit}) => {
    return (
        <div className='flex items-center gap-2'>
            <CheckCircleIcon className='h-6 w-6 text-blue-500'/>
            <span className='pl-2 '>{benefit}</span>
        </div>
    );
};

export default Feature;