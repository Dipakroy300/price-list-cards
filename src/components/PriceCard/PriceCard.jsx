import React from 'react';
import Feature from '../Feature/Feature';


const PriceCard = ({price}) => {
    return (
        <div className='bg-blue-200 mt-5 p-4 rounded-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl text-blue-900 font-extrabold'>${price.price}</span>
                <span className='text-red'>/month</span>
            </h2>
            <h1 className='md:text-4xl text-center text-3xl text-teal-950 font-bold'>{price.type}</h1>
            <p className='underline text-orange-900 font-bold'>Benefits:</p>
            <div >
                    {
                        price.benefits.map((benefit,idx) => <Feature
                        key={idx}
                        benefit={benefit}
                        ></Feature>)
                    }
            </div>
            <button className='bg-purple-400 rounded-md font-bold w-full p-2 mt-auto hover:bg-purple-600'>Buy Now</button>
        </div>
    );
};

export default PriceCard;