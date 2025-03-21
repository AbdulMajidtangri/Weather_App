import React, { useEffect, useState } from "react";
import CreateContextt from "./CreateContextt";

const Create_api = ({ children }) => {
  const apikey = "d8b92a167d443f81006826fa5ab851f1";
  const [city, setCity] = useState("London");
  const [humidity, setHumidity] = useState(null);
  const [windspeed, setwindspeed] = useState(null);
  const [temp, setTemp] = useState(null);

  const fetchingData = async () => {
    try {
      const fetchdata = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
      );
      const data = await fetchdata.json();

      console.log(data);

      if (data.main) {
        setHumidity(data.main.humidity);
        setTemp((data.main.temp - 273.15).toFixed(2)); 
        setwindspeed((data.wind.speed));
      } else {
        setHumidity(null);
        setTemp(null);
        setwindspeed(null)
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setHumidity(null);
      setTemp(null);
      setwindspeed(null);
    }
  };

  useEffect(() => {
    fetchingData();
  }, [city]);

  return (
    <CreateContextt.Provider value={{ city, setCity, temp, humidity,windspeed }}>
      {children}
    </CreateContextt.Provider>
  );
};

export default Create_api;
