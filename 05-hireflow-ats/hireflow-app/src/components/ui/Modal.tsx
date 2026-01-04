import React from "react";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, title, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/50"
        onClick={onClose}
      />

      {/* Modal box */}
      <div className="relative z-10 w-full max-w-lg rounded-xl bg-white shadow-xl ">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {title || "Modal"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-brand-600 transition"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
