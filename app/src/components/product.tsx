"use client"
import React, { useState } from 'react'
import Modal from './Modal';

// const Icon = ({ name, size, className }: { name: string, size: any, className: string }) => {
//     return (
//         <svg className='w-[20px] h-[20px] object-fill text-white ml-1 group-hover:text-white' fill="#fff">
//             <use xlinkHref={`../../images/sprite.svg#${name}`} width={size} className={className} />
//         </svg>
//     )
// }

interface ProductData {
    id: number;
    name: string;
    milage: string;
    year: number;
    type: string;
    image: string;
}

const Product = ({ data }: { data: ProductData[] }) => {

    const [product, setProduct] = useState<ProductData[]>(data)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductData | null>();

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const showPopup = (product: ProductData) => {
        // console.log(product)
        setIsModalOpen(true);
        setSelectedProduct(product);
    }

    return (
        <>
            <div className='flex flex-wrap'>
                {product.map((product) => (
                    <div key={product.id} className='group lg:w-1/4 md:w-1/2 ' onClick={() => showPopup(product)}>
                        <div className='bg-[#F1F5FF] p-6 rounded-lg shadow-md transition-all duration-[600ms] cursor-pointer hover:bg-[#2d74ba] hover:text-white m-4'>
                            <img src={product.image} alt={product.name} className='w-full object-fill' />
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
                                    {/* <img src="../../images/calender.svg" alt={product.name} className='w-[20px] h-[20px] object-fill text-white ml-1 group-hover:text-white' /> */}
                                    {/* <Icon name="icon-calender" size="20" className={"group-hover:text-[#2d74ba]" } /> */}
                                    <svg className='w-[20px] h-[20px] object-fill text-white ml-1 group-hover:text-white' fill="#fff">
                                        <use xlinkHref={`../../images/sprite.svg#icon-calender`} className='fill-white group-hover:fill-[#2d74ba]' />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} data={selectedProduct} />
        </>
    )
}

export default Product 
