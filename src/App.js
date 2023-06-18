import { useEffect, useState } from 'react';
import './App.css';
import './styles.css';

function App() {

  const [time, setTime] = useState('');

  const formatTime = val => {
    if (val < 10) {
      return '0';
    } else {
      return '';
    }
  }

  useEffect(() => {

    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    }
  })

  const tick = () => {
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
  
    setTime(formatTime(hours) + hours + ':' + formatTime(mins) + mins + ':' + formatTime(secs) + secs);
  };

  return (
    <div className='clock'>
      <div className='screen'>
        <h1 className='time'>
          {time}
        </h1>
      </div>
    </div>
  );
}

export default App;


