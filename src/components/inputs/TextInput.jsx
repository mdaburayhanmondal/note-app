import React from 'react';

const TextInput = ({
  label,
  name,
  value,
  onChange,
  required = false,
  placeHolder = '',
}) => (
  <div className="mb-4 w-full">
    <label className="block font-semibold">{label}:</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded-lg focus:outline-0"
      required={required}
      placeholder={placeHolder}
    />
  </div>
);

export default TextInput;
