import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')  // services.json ai file tyheke data load kortesi 
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='text-center'>
            <div>
                <p className="text-2xl font-bold text-orange-600 mb-4">Services</p>
                <h2 className="text-5xl font-semibold mb-4">Our Service Area</h2>
                <p className='mb-4'>The majority have suffered alteration in some form, by injected humour, or randomised
                    <br />
                    words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    services.map(service => <ServiceCard
                        key={services._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;