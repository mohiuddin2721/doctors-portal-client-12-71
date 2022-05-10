import React from 'react';
import Service from './Service';

const Services = () => {
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-12'>
                <Service></Service>
                <Service></Service>
                <Service></Service>
            </div>
        </div>
    );
};

export default Services;