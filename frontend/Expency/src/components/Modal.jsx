import React, { useEffect } from "react";

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/50">
      <div className="relative p-4 w-full max-w-2xl bg-gray-800 text-white rounded-lg shadow-md border border-gray-500 dark:bg-white dark:text-gray-900 dark:border-gray-300">
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-600 dark:border-gray-300">
          <h3 className="text-lg font-medium">{title}</h3>
          <button
            type="button"
            className="text-gray-300 bg-transparent hover:bg-gray-700 hover:text-white rounded-full p-2 dark:text-gray-700 dark:hover:bg-gray-200 dark:hover:text-gray-900 cursor-pointer"
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </div>
        {/* Modal body */}
        <div className="p-4 space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
