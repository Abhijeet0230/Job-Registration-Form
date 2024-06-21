import React from "react";

const DateTimePickerField = ({ label, name, value, onChange, error }) => (
  <div className="mb-4">
    <label className="block font-medium">{label}</label>
    <input
      type="datetime-local"
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full p-2 border rounded"
    />
    {error && <p className="text-red-500">{error}</p>}
  </div>
);
export default DateTimePickerField;
