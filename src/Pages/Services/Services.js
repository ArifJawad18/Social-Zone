import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ml-10 mr-5 mt-7'>
           
            {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)

            }
        </div>
    );
};

export default Services;