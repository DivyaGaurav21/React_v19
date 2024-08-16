import React from 'react';
import { useCart } from '../context/CartContextProvider';

const Cart = () => {
    const { cart, removeItem, totalPrice } = useCart();

    return (
        <div className="p-4 bg-white shadow-lg rounded-md w-1/3">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="space-y-4 mb-4">
                        {cart.map(item => (
                            <li key={item.id} className="border p-4 rounded-md shadow-sm">
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-gray-600">${item.price}</p>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="font-bold text-lg">
                        Total Price: ${totalPrice.toFixed(2)}
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
