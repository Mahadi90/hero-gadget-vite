import React from 'react';
import { getDataFromDb } from './components/Cards/utils/fakeDb';

const Cart = () => {

   const cart = getDataFromDb();
   console.log(cart)

    return (
        <div>
            <h2 className='text-red-500 text-5xl text-center font-bold'>This is cart</h2>
        </div>
    );
};

export default Cart;