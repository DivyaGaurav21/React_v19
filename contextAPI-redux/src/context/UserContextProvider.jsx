// AuthContext.js
import React, { createContext, useContext ,  useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const signup = ({ name, email, password }) => {
    const userCredentials = { name, email, password };
    localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
    alert('Sign-up successful! You can now log in.');
  };

  const login = ({ email, password }) => {
    const savedCredentials = JSON.parse(localStorage.getItem('userCredentials'));

    if (savedCredentials && email === savedCredentials.email && password === savedCredentials.password) {
      const userData = { name: savedCredentials.name, email };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
    const userContext = useContext(AuthContext);
    if(!userContext){
        throw new Error("User context is not available");
    }
    return userContext;
};
