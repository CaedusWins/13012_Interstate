import React from 'react';

const Services = () => {
    const servicesList = [
        {
            title: 'Service One',
            description: 'Description of Service One.',
            image: 'path/to/image1.jpg'
        },
        {
            title: 'Service Two',
            description: 'Description of Service Two.',
            image: 'path/to/image2.jpg'
        },
        {
            title: 'Service Three',
            description: 'Description of Service Three.',
            image: 'path/to/image3.jpg'
        }
    ];

    return (
        <div className="services">
            <h2>Our Services</h2>
            <div className="services-list">
                {servicesList.map((service, index) => (
                    <div key={index} className="service-item">
                        <img src={service.image} alt={service.title} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;