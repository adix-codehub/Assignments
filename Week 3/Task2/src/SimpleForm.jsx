import React, { useState } from 'react';

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Submitted Value:', inputValue);
    setInputValue(''); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 max-w-md w-full bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">React Form</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text..."
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
        <button 
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
