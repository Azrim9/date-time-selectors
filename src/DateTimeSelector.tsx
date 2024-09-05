import { useEffect, useState } from 'react';
import './App.css';

function DateTimeSelector({ typeOfSelector, state }) {
  const now = new Date();
  const [, setDateTime] = state;

  const [date, setDate] = useState(now.toISOString().split('T')[0]);
  const [time, setTime] = useState(now.toLocaleTimeString());

  const selectedDateTime = date + ' ' + time;

  useEffect(() => {
    setDateTime(selectedDateTime);
  }, [selectedDateTime]);

  console.log(date, time);
  return (
    <>
      <label>{typeOfSelector}:</label>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>{' '}
        <br />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        ></input>
      </div>
    </>
  );
}

export default DateTimeSelector;
