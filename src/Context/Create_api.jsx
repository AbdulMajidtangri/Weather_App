import React, { useEffect, useState } from "react";
import CreateContextt from "./CreateContextt";
const Create_api = ({ children }) => {
  const apikey = "d8b92a167d443f81006826fa5ab851f1";
  const [city, setCity] = useState("lahore");
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windspeed, setWindspeed] = useState(null);
  const fetchdata = async () => {
    try {
      const raw = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
      );
      const data = await raw.json();
     
      if (data.main) {
        setTemp((data.main.temp - 274.14).toFixed(2));
        setHumidity(data.main.humidity);
        setWindspeed(data.wind.speed);
      } else {
        setTemp(null);
        setHumidity(null);
        setWindspeed(null);
        console.log("the Wrong name is Added ");
      }
    } catch (error) {
      console.log("there si the issue inn the data", error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, [city]);
  return (
    <CreateContextt.Provider value={{city, temp, humidity, windspeed, setCity}}>
      {children}
    </CreateContextt.Provider>
  );
};

export default Create_api;
