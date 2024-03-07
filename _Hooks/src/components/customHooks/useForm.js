import { useState } from 'react';

// Custom hook: useForm
export const useForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);

  // Update the form values when an input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Reset the form to its initial state
  const resetForm = () => {
    setFormValues(initialState);
  };

  // Return the current form values, the change handler, and the reset function
  return {
    formValues,
    handleInputChange,
    resetForm,
  };
};


