import React from "react";

const CustomInput = (props) => {
  const { title = "", name, ...inputProps } = props;
  const inputId = `${name}-input`;
  return (
    <div className="block mb-4">
      <label htmlFor={inputId} className="text-gray-700">
        {title}
      </label>
      <input
        id={inputId}
        {...inputProps}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500"
      />
    </div>
  );
};

export default CustomInput;
