import React, { useState } from "react";

import ServiceForm from "./ServiceForm";
import DataForm from "./DataForm";

const Services = () => {
  const [services, setServices] = useState([]);
  const [serviceData, setServiceData] = useState({});

  const addService = (newService) => {
    setServices((prev) => [...prev, newService]);
    setServiceData((prev) => ({ ...prev, [newService.id]: [] }));
  };

  const addData = (serviceId, newData) => {
    setServiceData((prev) => ({
      ...prev,
      [serviceId]: [...prev[serviceId], newData],
    }));
  };

  return (
    <div className="container mx-auto">
      <ServiceForm addService={addService} />
      <DataForm services={services} addData={addData} />

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Services with Data</h2>
        {services.map((service) => (
          <div key={service.id} className="mb-6">
            <h3 className="text-xl font-bold">{service.name}</h3>
            <div>
              {serviceData[service.id].map((data, index) => (
                <div key={index} className="p-4 border border-gray-300 mb-2">
                  <div className="flex items-center mb-2">
                    {data.icon}
                    <h4 className="ml-2 text-lg font-bold">{data.heading}</h4>
                  </div>
                  <p>{data.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
