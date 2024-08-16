// LogIn.js
import React, { useState } from 'react';
import { useUserAuth } from '../context/UserContextProvider';

const LogIn = () => {
    const { login } = useUserAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
        setFormData({
            email: "",
            password: "",
        });
    };

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="flex justify-center items-center h-[90vh]">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg  border-2 border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={onChangeInput}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={onChangeInput}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
