import React, { useState } from "react";

import CustomInput from "../../../../components/UI/CustomInput";
import Button from "../../../../components/UI/Buttons";

const ServiceForm = ({ addService }) => {
  const [serviceName, setServiceName] = useState("");

  const handleServiceSubmit = (event) => {
    event.preventDefault();
    if (serviceName) {
      addService({ id: Date.now(), name: serviceName });
      setServiceName("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add New Service</h2>
      <form
        onSubmit={handleServiceSubmit}
        className="max-w-md mt-10 p-6 bg-white shadow-md"
      >
        <CustomInput
          title="Service Name:"
          name="service-name"
          id="service-name"
          type="text"
          value={serviceName}
          onChange={(event) => setServiceName(event.target.value)}
        />
        <Button type="submit">Add Service</Button>
      </form>
    </div>
  );
};

export default ServiceForm;
