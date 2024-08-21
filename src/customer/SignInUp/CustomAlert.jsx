import React from 'react';

const CustomAlert = ({ message, severity, onClose }) => {
  if (!message) return null;

  const alertStyles = {
    base: 'fixed top-5 right-5 z-50 px-4 py-3 rounded shadow-lg text-white',
    success: 'bg-green-500',
    error: 'bg-red-500',
  };

  return (
    <div className={`${alertStyles.base} ${alertStyles[severity]}`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-xl font-bold">
          &times;
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
