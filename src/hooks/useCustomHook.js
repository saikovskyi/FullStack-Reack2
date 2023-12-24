import { useState } from 'react';

function useCustomHook(initialValue, step) {
  const [count, setCount] = useState(initialValue);
  const [message, setMessage] = useState('');

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  const showMessage = () => {
    setMessage(message);
  };

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return { count, increment, decrement, message, showMessage, updateMessage };
}

export default useCustomHook;
