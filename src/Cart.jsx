import React from 'react';

import { useLoaderData } from 'react-router-dom';

const Cart = () => {

    const cartArray = useLoaderData()

   console.log(cartArray)



    return (
        <div>
            <h2 className='text-red-500 text-5xl text-center font-bold'>This is cart</h2>
        </div>
    );
};

export default Cart;