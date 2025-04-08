import React, { useContext, useState } from "react";
import CreateContextt from "../Context/CreateContextt";
import colgimg from "../assets/cold.png"
const Weather_info = () => {
  const { city, setCity, temp, humidity,windspeed } = useContext(CreateContextt);
 const [searchcity,setSearchcity] = useState('');
 const handleSearch = ()=>{
  setCity(searchcity);
 }
  return (
    <>
      <div className="main" style={{position:'relative'}}>
        <div className="search">
          <input type="text" placeholder="Enter City Name" value={searchcity} onChange={(e)=>setSearchcity(e.target.value)}/>
          <button onClick={handleSearch}>Search</button>
        </div>
        {
          (temp !== null && humidity !==null ) ?
        
       ( <> <div className="temprature">
        {
          temp < 12 ?( <img  src={colgimg} alt="Weather Icon" /> ) : ( <img  src="https://png.pngtree.com/png-vector/20221130/ourmid/pngtree-bright-sun-vector-illustration-png-image_6486315.png" alt="Weather Icon" /> )   
            }      
              <h1> {city}: {temp}°C  </h1>
            </div>
            <div className="General" style={{ display:'flex',alignItems:'center',gap:'1.4rem',position:'absolute',bottom:'5%'}}>
              <div className="humidity">
              <h1>{humidity}% Humidity</h1>
            </div>
            <div className="humidity">
              <h1>Wind Speed {windspeed} </h1>
            </div> 
            </div>
       </>    ) :
        ( <h2 style={{ color: "red", textAlign: "center" }}>
            No data available. Please enter a valid city.
          </h2>)}
      </div>
    </>
  );
};

export default Weather_info;
