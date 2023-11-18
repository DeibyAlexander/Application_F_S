

const API = 'http://localhost:4000/api'

const registerRequest = async (user) => {
    try {
      const response = await fetch(`${API}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error('Error during registration:', error.message);
      throw new Error('Registration failed');
    }
};


export {
    registerRequest
}