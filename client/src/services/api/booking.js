export const fetchAvailableTimes = async () => {
    try {
      const response = await fetch('http://localhost:5000/times');
      const data = await response.json();
      return data.availableTimes.split(', ');
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };






