import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Map = ({ locations = [] }) => {
  useEffect(() => {
    const map = L.map('map', {
      center: [23.7925, 90.4078],
      zoom: 12,
      zoomControl: false,
    });
    L.control
      .zoom({
        position: 'topright',
      })
      .addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add markers
    if (locations.length === 0) {
      const defaultMarker = L.marker([23.789855, 90.408164]).addTo(map);
      defaultMarker.bindPopup('1200/4 Banani ');
    } else {
      locations.forEach(({ coords, popup }) => {
        const marker = L.marker(coords).addTo(map);
        marker.bindPopup(popup);
      });
    }
    return () => {
      map.remove();
    };
  }, [locations]);

  return (
    <>
      <Helmet>
        <title>DineMaster | Our Location</title>
      </Helmet>
      <div className='flex flex-col items-center justify-center mt-6 mx-4 '>
        <p className='text-text dark:text-white  font-bold text-3xl mb-2'>
          Our Restaurant Location
        </p>
        <div
          id='map'
          className='h-[750px] w-[100%]   border-4 border-text shadow-lg rounded-lg '
        ></div>
      </div>
    </>
  );
};

export default Map;
