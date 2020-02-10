import React, { useState } from 'react';
import ReactMapGL from "react-map-gl";
// import './App.css';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 40.7831,
    longitude: 73.9712,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })
  return (
    <div className="App">
		 <ReactMapGL 
		   {...viewport} 
			 mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
			 mapStyle="mapbox://styles/tsardines/ck4ophj9c0szv1cpm3ih7czez"
       onViewportChange={viewport => {
         setViewport(viewport);
       }}
     >
       markers
     </ReactMapGL>
    </div>
  );
}

// export default App;
