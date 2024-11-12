import React, { useEffect, useState } from 'react';
import './styles.css';
import 'animate.css';

const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return visible ? (
    <div className={`toast toast-${type} animate__animated animate__fadeInRight`}>
      {message}
    </div>
  ) : null;
};

export default Toast;