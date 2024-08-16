import React from 'react';
import { useCart } from '../context/CartContextProvider';

const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
];

const ItemList = () => {
    const { addItem } = useCart();

    return (
        <div className="p-4 bg-white shadow-lg rounded-md w-2/3">
            <h2 className="text-2xl font-bold mb-4">Items</h2>
            <ul className="space-y-4">
                {items.map(item => (
                    <li key={item.id} className="border p-4 rounded-md shadow-sm">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-gray-600">${item.price}</p>
                        <button
                            onClick={() => addItem(item)}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
