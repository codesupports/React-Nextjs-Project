import React from 'react'

interface selectedProduct {
  id: number;
  name: string;
  milage: string;
  year: number;
  type: string;
  image: string;
}

interface ModalProps {
  isOpen: boolean;
  data: selectedProduct | null | undefined;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {

  if (!isOpen) return null

  // console.log("data aaya",data)

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-center mb-4 capitalize">{data?.name}</h2>
        <p className="text-gray-700 text-center mb-6">Type: {data?.type}, Milage: {data?.milage}</p>

        <button
          onClick={onClose}
          className="px-4 py-2 bg-[#2d74ba] text-white rounded-md hover:bg-red-600 block mx-auto"
        >
          Close Modal
        </button>
      </div>
    </div>
  )
}

export default Modal
