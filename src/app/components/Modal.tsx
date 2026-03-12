import React from 'react'

import Image from 'next/image';

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
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300" onClick={onClose}>
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full relative" onClick={(e)=>e.stopPropagation()}>
        <button  onClick={onClose} className="px-2 py-1 bg-[#2d74ba] text-white rounded-lg text-sm hover:bg-red-600 block mx-auto absolute right-2 top-2" >X </button>
        <div className='flex'>
          <div className='w-1/2'>
            <Image src={`/images/${data?.image}`} loading='lazy' alt={`${data?.name}`} width={100} height={100} className='w-full object-fill' />
          </div>
          <div className='w-1/2 p-4'>
            <h2 className="text-xl font-semibold text-center mb-4 capitalize">{data?.name}</h2>
            <p className="text-gray-700 text-center mb-2">Type: {data?.type}, Milage: {data?.milage}</p>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Modal
