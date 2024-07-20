import React, { useState } from "react";

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
      <form onSubmit={handleServiceSubmit} className="max-w-md mt-10 p-6 bg-white shadow-md">
        <label className="block mb-2">
          Service Name:
          <input
            type="text"
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            value={serviceName}
            onChange={(event) => setServiceName(event.target.value)}
          />
        </label>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-black text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
