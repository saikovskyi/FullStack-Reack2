import { useEffect, useState } from 'react';
import useCustomHook from '../hooks/useCustomHook';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const { count, increment, decrement, message, showMessage, updateMessage } = useCustomHook(0, 1);

  useEffect(() => {
    const coords = 'latitude=52.52&longitude=13.41';
    const getWeather = async () => {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?${coords}&current=temperature_2m,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
      );
      const data = await response.json();
      setWeather(data);
    };
    getWeather();
  }, []);

  return (
    <>
      <div>
        <h1>Current Weather</h1>
        {!!weather && <div>{weather.current.temperature_2m} C</div>}
      </div>
      <div>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        <h2>Message</h2>
        <p>Current Message: {message}</p>
        <button onClick={() => updateMessage('Your Message')}>Show Message</button>
        <button onClick={() => updateMessage('New Message')}>Update Message</button>
      </div>
    </>
  );
}
