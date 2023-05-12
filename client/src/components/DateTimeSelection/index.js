import React, { useEffect, useState } from 'react';
import DateSelection from '../Selections/Date';
import TimeSelection from '../Selections/Time';
import BasicDateCalendar from '../Selections/Date';

const DateTimeSelection = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

    

//    useEffect(() => {
//       const fetchData = async () => {

//         let specificDate = new Date(2023, 4, 14);
//         let todaysDate = specificDate.toISOString().split('T')[0];
//         const times = await fetchAvailableTimes(todaysDate ,selectedTestCenter);
//         setAvailableTimes(times);
//       };
  
//       fetchData();
//     }, [selectedTestCenter]);
  

  useEffect(() => {
    // if (selectedDate && selectedTime) {
    //   console.log(`Selected date is ${selectedDate} and time is ${selectedTime}`);
    //   // Perform some operations based on the selected date and time
    // }

    const fetchData = async () => {

        const times = await fetchAvailableTimes(selectedDate ,selectedTestCenter);
        setAvailableTimes(times);
      };

      fetchData
  }, [selectedDate]);  // Runs whenever selectedDate or selectedTime changes

  return (
    <div>
      {/* <DateSelection selectedDate ={selectedDate} onDateSelect={setSelectedDate} /> */}
      <BasicDateCalendar/>
      <TimeSelection  />
    </div>
  );
};

export default DateTimeSelection;
