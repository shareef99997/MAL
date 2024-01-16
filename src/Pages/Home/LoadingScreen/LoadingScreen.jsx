import React, { useState, useEffect } from 'react';
import './LoadingScreen.css'; // Create a CSS file for styling

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(false);
  //   }, 3000); // Set the duration for the logo display (in milliseconds)

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className={`loading-screen ${isVisible ? '' : 'hidden'}`}>
      <Lines />
      <img src={require('../../../Assets/Logos/Main_Logo.png')} alt="Logo" />
      <div className='gold-screen'></div>
      <div className='gold-screend'></div>
    </div>
  );
};

export const Lines = () => {
  return (
      <div className="lines-container">
        <div className="line line-top"></div>
        <div className="line line-right"></div>
        <div className="line line-left"></div>
        <div className="line line-bottom"></div>
      </div>
  );
};
export const Stars = () => {
  // Generate stars dynamically or use a static set
  const stars = Array.from({ length: 50 }, (_, index) => (
    <div key={index} className="star" style={generateStarStyles()}></div>
  ));

  return <div className="stars">{stars}</div>;
};

const generateStarStyles = () => {
  const size = Math.random() * 3 + 1;
  const duration = Math.random() * 0.5 + 0.5;
  const delay = Math.random() * 2;
  const top = Math.random() * 100;
  const left = Math.random() * 100;

  return {
    width: `${size}px`,
    height: `${size}px`,
    animationDuration: `${duration}s`,
    animationDelay: `-${delay}s`,
    top: `${top}%`,
    left: `${left}%`,
  };
};

export default LoadingScreen;