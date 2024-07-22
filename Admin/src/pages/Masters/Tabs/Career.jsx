import React, { useState } from "react";

import CustomInput from "../../../components/UI/CustomInput";
import Button from "../../../components/UI/Buttons";

const CareerForm = () => {
  const addJobHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="max-w-md shadow p-4">
      <form onSubmit={addJobHandler}>
        <h2 className="text-2xl font-bold mb-4">Add New Job</h2>
        <CustomInput
          title="Job Title:"
          name="job-title"
          id="job-title"
          type="text"
        />
        <CustomInput
          title="Job Experience:"
          name="job-experience"
          id="job-experience"
          type="number"
        />
        <CustomInput
          title="Job Salary:"
          name="job-salary"
          id="job-salary"
          type="number"
        />
        <CustomInput
          title="Job Location:"
          name="job-location"
          id="job-location"
          type="text"
        />
        <label className="block mb-4" id="job-description">
          Description:
          <textarea
            name="job-description"
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          ></textarea>
        </label>
        <Button type="submit">Add Job</Button>
      </form>
    </div>
  );
};

export default CareerForm;
