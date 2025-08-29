// This module includes utility functions that can be reused throughout the application.

// Example utility function to format dates
export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

// Example utility function to validate email format
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Example utility function to generate a unique ID
export const generateUniqueId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};