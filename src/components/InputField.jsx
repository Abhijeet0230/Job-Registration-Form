import React from "react";

const InputField = ({ label, type, name, value, onChange, error }) => (
  <div className="mb-4">
    <label className="block font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full p-2 border rounded"
    />
    {error && <p className="text-red-500">{error}</p>}
  </div>
);

export default InputField;
