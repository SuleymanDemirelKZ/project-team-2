// src/services/api/appointments.js

const appointments = [
    {
      id: 1,
      date: '2023-05-01',
      time: '10:00 AM',
      userId: 1,
      testCenterId: 1,
    },
    {
      id: 2,
      date: '2023-05-02',
      time: '1:00 PM',
      userId: 2,
      testCenterId: 2,
    },
    // Add more appointments here as needed
  ];
  
  export const getAppointments = async () => {
    try {
      return appointments;
    } catch (error) {
      console.error('Error fetching appointments:', error);
      throw error;
    }
  };
  