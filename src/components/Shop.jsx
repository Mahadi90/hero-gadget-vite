import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';

const Shop = () => {

   const productsData = useLoaderData();

    return (
        <div className='product-container'>
            {
                productsData.map(product => <ProductCard
                key={product.id}
                product={product}
                />)
            }
        </div>
    );
};

export default Shop;