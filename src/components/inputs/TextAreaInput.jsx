import React from 'react';

const TextAreaInput = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div>
      <label className="block font-semibold">{label}:</label>
      <textarea
        placeholder={placeholder}
        className="min-h-15 max-h-30 w-full border px-2 py-1 rounded focus:outline-0"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
