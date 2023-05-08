export const fetchAvailableTimes = async () => {
    try {
      const response = await fetch('http://localhost:5000/times');
      const data = await response.json();
      return data.availableTimes.split(', ');
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };






export const postBooking = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/createBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Data submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };