import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as cartData from "./data/ottawa-streetfood-vendors.json";
// import * as courtData from "./data/tennis_courts.json";
import './App.css';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })

  const [selectedCart, setSelectedCart] = useState(null);

  useEffect(() => {
    const listener =(e) => {
      if (e.key === 'Escape') {
        setSelectedCart(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [])

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
       {cartData.features.map(cart => (
         <Marker
            key={cart.attributes.FID}
            latitude={cart.geometry.y} 
            longitude={cart.geometry.x}
         >
          <button 
           class="marker-btn" 
           onClick={(e) => {
              e.preventDefault();
              setSelectedCart(cart);
           }}
          >
            <img src="/hamburger.svg" alt=""/>
           </button>

         </Marker>
       ))}

       {selectedCart ? (
        <Popup 
          latitude={selectedCart.geometry.y} 
          longitude={selectedCart.geometry.x}
          onClose={() => {
            setSelectedCart(null);
          }}
        >
          <div>
            <h3>{selectedCart.attributes.Trade_Name}</h3>
            <p>{selectedCart.attributes.Concept}</p>
            <p>{selectedCart.attributes.Location}</p>
            <p>{selectedCart.attributes.Website}</p>
          </div>
        </Popup>
       ) : null }
     </ReactMapGL>
    </div>
  );
}

// export default App;
