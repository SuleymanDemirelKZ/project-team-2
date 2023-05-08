// src/services/api/testCenters.js

const testCenters = [
    {
      id: 1,
      name: "Test Center 1",
      appointments: [
        {
          id: 101,
          date: "2023-05-10",
          time: "09:00",
          userId: 1001,
          appointmentStatus: "SCHEDULED"
        },
        {
          id: 102,
          date: "2023-05-11",
          time: "14:00",
          userId: 1002,
          appointmentStatus: "COMPLETED"
        },
        {
            id: 102,
            date: "2023-05-11",
            time: "14:00",
            userId: 1002,
            appointmentStatus: "COMPLETED"
          },
          {
            id: 102,
            date: "2023-05-11",
            time: "14:00",
            userId: 1002,
            appointmentStatus: "COMPLETED"
          },
          {
            id: 102,
            date: "2023-05-11",
            time: "14:00",
            userId: 1002,
            appointmentStatus: "COMPLETED"
          },
          {
            id: 102,
            date: "2023-05-11",
            time: "14:00",
            userId: 1002,
            appointmentStatus: "COMPLETED"
          },
          {
            id: 102,
            date: "2023-05-11",
            time: "14:00",
            userId: 1002,
            appointmentStatus: "COMPLETED"
          }
        // Add more appointments for Test Center 1 (total: 20 appointments)
      ],
    },
    {
      id: 2,
      name: "Test Center 2",
      appointments: [
        {
          id: 201,
          date: "2023-05-12",
          time: "10:00",
          userId: 1003,
          appointmentStatus: "SCHEDULED"
        },
        {
          id: 202,
          date: "2023-05-13",
          time: "15:00",
          userId: 1004,
          appointmentStatus: "CANCELED"
        },
        // Add more appointments for Test Center 2 (total: 20 appointments)
      ],
    },
    {
      id: 3,
      name: "Test Center 3",
      appointments: [
        {
          id: 301,
          date: "2023-05-14",
          time: "11:00",
          userId: 1005,
          appointmentStatus: "COMPLETED"
        },
        {
          id: 302,
          date: "2023-05-15",
          time: "16:00",
          userId: 1006,
          appointmentStatus: "SCHEDULED"
        },
        // Add more appointments for Test Center 3 (total: 20 appointments)
      ],
    },
    {
      id: 4,
      name: "Test Center 4",
      appointments: [
        {
          id: 401,
          date: "2023-05-16",
          time: "12:00",
          userId: 1007,
          appointmentStatus: "SCHEDULED"
        },
        {
          id: 402,
          date: "2023-05-17",
          time: "17:00",
          userId: 1008,
          appointmentStatus: "CANCELED"
        },
        // Add more appointments for Test Center 4 (total: 20 appointments)
      ],
    },
    {
      id: 5,
      name: "Test Center 5",
      appointments: [
        {
          id: 501,
          date: "2023-05-18",
          time: "13:00",
          userId: 1009,
          appointmentStatus: "COMPLETED"
        },
        {
          id: 502,
          date: "2023-05-19",
          time: "18:00",
          userId: 1010,
          appointmentStatus: "SCHEDULED"
        },
        // Add more appointments for Test Center 5 (total: 20 appointments)
      ],
    },
  ];
  export const getTestCenters = async () => {
    try {
      return testCenters;
    } catch (error) {
      console.error('Error fetching test centers:', error);
      throw error;
    }
  };
  