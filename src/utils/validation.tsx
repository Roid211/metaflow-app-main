export const validateEmail = (email:string) => {
    // Regular expression for a basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regex
    return emailRegex.test(email);
};



export const validatePassword = (password: string): boolean => {
    // Define the minimum number of uppercase letters
    const minUppercase = 1;
  
    // Define the minimum length
    const minLength = 6;
  
    // Check if the password meets the specified criteria
    return (
      password.length >= minLength &&
      (password.match(/[A-Z]/g) || []).length >= minUppercase
    );
  };