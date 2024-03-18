import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {

    const [prices,setPrices]=useState([]);

    useEffect(()=>{
        fetch('prices.json')
        .then(res=>res.json())
        .then(data=>setPrices(data))
    },[])
    return (
        <div className='md:mx-12 mt-6'>
            <h1 className='text-6xl font-bold bg-fuchsia-200 text-center
             text-purple-800 p-4' >Affordable Price </h1>
             <div className='md:grid grid-cols-3 gap-4'>
                    {
                        prices.map(price=> <PriceCard
                        key={price.id}
                        price={price}
                        ></PriceCard>)
                    }
             </div>
        </div>
    );
};

export default PriceList;