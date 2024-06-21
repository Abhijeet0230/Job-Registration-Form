import React from "react";

const DropdownField = ({ label, name, value, options, onChange, error }) => (
  <div className="mb-4">
    <label className="block font-medium">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full p-2 border rounded"
    >
      <option value="">Select</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500">{error}</p>}
  </div>
);

export default DropdownField;
