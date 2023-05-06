import React from 'react';

const TimeSelection = ({ availableTimes, selectedTime, onTimeChange }) => {
  return (
    <select value={selectedTime} onChange={onTimeChange}>
      <option value="">Select a time</option>
      {availableTimes.map((time) => (
        <option key={time} value={time}>
          {time}
        </option>
      ))}
    </select>
  );
};

export default TimeSelection;
