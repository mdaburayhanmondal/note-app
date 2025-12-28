import React from 'react';

const SelectInput = ({ label, name, value, onChange, options }) => (
  <div className="mb-4 w-full">
    <label className="block font-semibold">{label}:</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded-lg"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
