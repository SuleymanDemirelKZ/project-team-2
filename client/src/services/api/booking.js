export const fetchAvailableTimes = async (date, testCenter) => {
    try {
      let serverUrl = new URL('http://localhost:8080/api/time-slots/available');
      
      let params = {
        date: date,
        testCenterId: testCenter
      }
      Object.keys(params).forEach(key => serverUrl.searchParams.append(key, params[key]))

      const response = await fetch(serverUrl);
      const data =  await response.json(); 
      console.log(serverUrl)
      console.log(data)
      return data
    
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };






export const createBooking = async (data) => {
    try {
      console.log(data, 'my some dasta ')
      const response = await fetch('http://localhost:8080/api/appointments', {
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