import React, { useState } from "react";
import {
  FaLightbulb,
  FaChartBar,
  FaPaintBrush,
  FaCode,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";

import CustomInput from "../../../../components/UI/CustomInput";
import Button from "../../../../components/UI/Buttons";

const DataForm = ({ services, addData }) => {
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [icon, setIcon] = useState("");
  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");

  const iconOptions = [
    {
      label: "Lightbulb",
      value: "FaLightbulb",
      component: <FaLightbulb className="text-2xl text-primary" />,
    },
    {
      label: "Chart Bar",
      value: "FaChartBar",
      component: <FaChartBar className="text-2xl text-primary" />,
    },
    {
      label: "Paint Brush",
      value: "FaPaintBrush",
      component: <FaPaintBrush className="text-2xl text-primary" />,
    },
    {
      label: "Code",
      value: "FaCode",
      component: <FaCode className="text-2xl text-primary" />,
    },
    {
      label: "Check Circle",
      value: "FaCheckCircle",
      component: <FaCheckCircle className="text-2xl text-primary" />,
    },
    {
      label: "Rocket",
      value: "FaRocket",
      component: <FaRocket className="text-2xl text-primary" />,
    },
  ];

  const handleDataSubmit = (event) => {
    event.preventDefault();

    const selectedIcon = iconOptions.find((option) => option.value === icon);
    if (!selectedIcon) {
      alert("Please select a valid icon.");
      return;
    }

    const newData = {
      icon: selectedIcon.component,
      heading,
      desc,
    };

    addData(selectedServiceId, newData);

    setIcon("");
    setHeading("");
    setDesc("");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Add Data to Service</h2>
      <form
        onSubmit={handleDataSubmit}
        className="max-w-md mt-10 p-6 bg-white shadow-md"
      >
        <label className="block mb-2">
          Select Service:
          <select
            className="w-full mt-2 p-2 border border-gray-300"
            value={selectedServiceId}
            onChange={(event) => setSelectedServiceId(event.target.value)}
          >
            <option value="">Select Service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block mb-2">
          Icon:
          <select
            className="w-full mt-2 p-2 border border-gray-300"
            value={icon}
            onChange={(event) => setIcon(event.target.value)}
          >
            <option value="">Select Icon</option>
            {iconOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <CustomInput
          title="Heading:"
          type="text"
          id="heading"
          name="heading"
          value={heading}
          onChange={(event) => setHeading(event.target.value)}
        />
        <label className="block mb-4">
          Description:
          <textarea
            className="w-full mt-2 p-2 border border-gray-300"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
          ></textarea>
        </label>
        <Button type="submit">Add Data</Button>
      </form>
    </div>
  );
};

export default DataForm;
