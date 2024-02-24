import axios from 'axios';

export const NumberService = async (count) => {
  const promises = Array.from({ length: count }, () =>
    axios.get('http://numbersapi.com/random?min=10&max=100')
  );

  try {
    const results = await Promise.all(promises);
    return results.map((response) => {
      const number = parseInt(response.data.split(' ')[0], 10);
      return number;
    });
  } catch (error) {
    console.error('Error fetching random numbers', error);
    throw error;
  }
};


export default NumberService;
