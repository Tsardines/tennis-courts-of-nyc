import React, { useState } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import * as courtData from "./data/tennis_courts.json";
// import './App.css';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 40.758896,
    longitude: -73.985130,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })
  return (
    <div className="App">
		 <ReactMapGL 
		   {...viewport} 
			 mapboxApiAccessToken="pk.eyJ1IjoidHNhcmRpbmVzIiwiYSI6ImNrNmZ6ZXVyajFtZTYzZXMwcTQwandxbHIifQ.dCGU9zv1_wVkVPCdxIYzUg"
			 mapStyle="mapbox://styles/tsardines/ck4ophj9c0szv1cpm3ih7czez"
       onViewportChange={viewport => {
         setViewport(viewport);
       }}
     >
       {courtData.features.map(court => (
         <Marker
            key={court.properties.Prop_ID}
            latitude={court.geometry.coordinates[0]} 
            longitude={court.geometry.coordinates[1]}
         >
           <button>
             click
           </button>

         </Marker>
       ))}
     </ReactMapGL>
    </div>
  );
}

// export default App;
