// Content.js
import React, { useContext } from 'react';
import { ThemeContext } from "./ThemeProvider";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#333' : '#f0f0f0' }}>
      <p>This is the content of my app.</p>
    </div>
  );
};

export default Content;