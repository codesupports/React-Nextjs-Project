"use client"
import React, { useState } from 'react'

interface ProductData {
    id: number;
    name: string;
    year: number;
    type: string;
}

const Product = ({data}: {data: ProductData}) => {
    interface Product {
        id: number;
        name: string;
        year: number;
        type: string;
        image: string;
    }
    // console.log(data)
const [product, setProduct] = useState<Product[]>(data)
    return (
        <div className='flex flex-nowrap'>
            {product.map((product) => (
                <div key={product.id} className='bg-slate-200 p-6 rounded-lg m-4 hover:bg-[#2d74ba] hover:text-white'>
                    <img src={product.image} alt={product.name} className='w-[400px] mb-8 object-fill' />
                    <h1 className='text-lg font-bold'>{product.name}</h1>
                    <div className='flex justify-between'>
                        <p>{product.year}</p>
                        <p>{product.type}</p>   
                    </div>
                </div>
        ))
            }
        </div>
    )
}

export default Product 
