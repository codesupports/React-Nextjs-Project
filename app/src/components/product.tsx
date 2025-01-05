"use client"
import React, { useState } from 'react'
import Modal from './Modal';

interface ProductData {
    id: number;
    name: string;
    milage: number;
    year: number;
    type: string;
    image: string;
}

const Product = ({ data }: { data: ProductData[] }) => {
    interface Product {
        id: number;
        name: string;
        milage: number;
        year: number;
        type: string;
        image: string;
    }
    // console.log(data)
    const [product, setProduct] = useState<Product[]>(data)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {  
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const showPopup = (product: Product) => {
        // console.log(product)
        setIsModalOpen(true);
    }

    return (
        <>
            <div className='flex flex-wrap'>
                {product.map((product) => (
                    <div key={product.id} className='group bg-[#F1F5FF] p-6 rounded-lg m-4 shadow-md transition-all duration-[600ms] cursor-pointer hover:bg-[#2d74ba] hover:text-white' onClick={() => showPopup(product)}>
                        <img src={product.image} alt={product.name} className='w-[300px] object-fill' />
                        <h1 className='text-lg font-bold first-line:capitalize pb-4'>{product.name} <span className='text-[14px]'>({product.year})</span></h1>
                        <div className='flex justify-between'>
                            <div className='flex flex-col items-center'>
                                <img src="../../images/steering-wheel.svg" alt={product.name} className='w-[20px] h-[20px] object-fill ' />
                                <p className='pt-1'>{product.type}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img src="../../images/gas.svg" alt={product.name} className='w-[20px] h-[20px] object-fill' />
                                <p className='pt-1'>{product.milage}</p>
                            </div>

                        </div>
                        <div className='text-center'>
                            <button className='bg-[#2d74ba]  flex justify-center text-white px-4 py-2 rounded-md mt-4  group-hover:bg-white  group-hover:text-[#2d74ba] transition-all duration-[600ms]'>Book Now
                                <img src="../../images/calender.svg" alt={product.name} className='w-[20px] h-[20px] object-fill text-white ml-1 group-hover:text-white' /></button>
                        </div>
                    </div>
                ))
                }
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} data={product} />
        </>
    )
}

export default Product 
