import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-2 ml-7 mr-5 mt-7'>
            
           
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