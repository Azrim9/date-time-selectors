import { useState } from 'react';
import './App.css';
import DateTimeSelector from './DateTimeSelector';

function App() {
  const from = useState(null);
  const [fromDateTime] = from;
  const to = useState(null);
  const [toDateTime] = to;

  const fromDate = new Date(fromDateTime || '');
  const toDate = new Date(toDateTime || '');
  const dateDiff = toDate.getDate() - fromDate.getDate();

  return (
    <div className="parent">
      <div className="title">Date Time Selectors</div>
      <div className="to">
        <DateTimeSelector typeOfSelector={'From'} state={from} />
        {fromDateTime} <br />
      </div>
      <div className="from">
        <DateTimeSelector typeOfSelector={'To'} state={to} />
        {toDateTime} <br />
      </div>
      <div className="difference">The difference is {dateDiff} Days.</div>
    </div>
  );
}

export default App;
