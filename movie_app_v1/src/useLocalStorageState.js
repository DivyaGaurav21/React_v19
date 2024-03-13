// CUSTOM HOOKS 

import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        // if (!storedValue) {
        //     return [];
        // } else {
        //     return JSON.parse(storedValue);
        // }
        return storedValue ? JSON.parse(storedValue) : initialState;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}