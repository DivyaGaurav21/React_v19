import React, { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart(prevCart => [...prevCart, item]);
    };

    const removeItem = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    // Calculate the total price using useMemo for performance optimization
    const totalPrice = useMemo(() => {
        return cart.reduce((total, item) => total + item.price, 0);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
