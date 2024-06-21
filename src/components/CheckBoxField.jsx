import React from "react";

const CheckboxField = ({ label, name, checked, onChange }) => (
  <div className="mb-2">
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      {label}
    </label>
  </div>
);

export default CheckboxField;
