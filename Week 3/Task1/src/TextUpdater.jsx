import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FBFBFB]">
      <div className="p-6 max-w-md w-full bg-[#E8F9FF] rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">Text Updater</h1>
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Type something..."
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-[#FBFBFB]"
        />
        <div className="mt-4 text-lg">
          <strong>Updated Text: </strong>{text}
        </div>
      </div>
    </div>
  );
};

export default TextUpdater;
