import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from './Cards/utils/fakeDb';

const Shop = () => {

   const productsData = useLoaderData();

//    handle add to cart
const handleAddToCart = id =>{
    // console.log(id)
    addToDb(id)
}

    return (
        <div className='product-container'>
            {
                productsData.map(product => <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                />)
            }
        </div>
    );
};

export default Shop;