import React, { useState, useEffect, createContext } from "react";

const Context = React.createContext("");
const { Provider } = Context;

const ContextProvider = (props) => {
  // Create a countdown state
  const [countDown, setCountDown] = useState(() => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }));

  // Creating a screenSize state
  const [screenSize, setScreenSize] = useState(() => window.innerWidth);

  // Updating countdown function
  const updateRemainingTime = (countDownDate) => {
    let distance = countDownDate.getTime() - new Date().getTime();

    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hour = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((distance % (1000 * 60)) / 1000);

    setCountDown((prev) => ({
      ...prev,
      days: day,
      hours: hour,
      minutes: minute,
      seconds: second,
    }));
  };

  // Effect for updating countdown per second
  useEffect(() => {
    const interval = setInterval(() => {
      updateRemainingTime(new Date("Nov 1, 2022"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Setting the screenSize state to the window width and cleanup
  useState(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
    return () =>
      window.removeEventListener("resize", () => {
        setScreenSize(window.innerWidth);
      });
  }, []);

  return <Provider value={{ countDown, screenSize }}>{props.children}</Provider>;
};

export { ContextProvider, Context };
