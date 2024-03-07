import { useState, useEffect } from 'react';

// Custom hook: useApiData
export const useApiData = (apiEndpoint) => {
  // State to manage the fetched data
  const [data, setData] = useState([]);
  // State to track loading state
  const [loading, setLoading] = useState(true);
  // State to store any error that occurs during the API request
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Start loading
        setLoading(true);
        // Fetch data from the API
        const response = await fetch(apiEndpoint);
        // Check if the request was successful
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        // Update the error state if an error occurs
        setError(error);
      } finally {
        // Stop loading, whether the request was successful or not
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [apiEndpoint]); // Dependency array ensures the effect runs when the apiEndpoint changes

  // Return the data, loading state, and error
  return { data, loading, error };
};