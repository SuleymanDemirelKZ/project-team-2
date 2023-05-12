export const fetchAvailableTimes = async (date, testCenter) => {
    try {
      let serverUrl = new URL('http://localhost:8080/api/time-slots/available');
      
      let params = {
        date: date,
        testCenterId: testCenter-1
      }
      Object.keys(params).forEach(key => serverUrl.searchParams.append(key, params[key]))

      const response = await fetch(serverUrl);
      const data = await response.json(); 
      console.log(data)
      return data
    
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
      
      console.log(JSON.stringify(data))
      const result = await response.json();
      console.log('Data submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };