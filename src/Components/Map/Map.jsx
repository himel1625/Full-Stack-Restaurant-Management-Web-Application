import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect } from 'react';

const Map = ({ locations = [] }) => {
  useEffect(() => {
    const map = L.map('map', {
      center: [23.7925, 90.4078],
      zoom: 15,
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
      defaultMarker.bindPopup('Default Location');
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
    <div className='flex flex-col items-center justify-center mt-6'>
      <p className='text-gray-800 dark:text-blue-500 font-bold text-3xl mb-2'>
        Our Restaurant Location
      </p>
      <div
        id='map'
        className='h-[700px] w-[100%] border-4 border-blue-500 rounded-lg shadow-lg'
      ></div>
    </div>
  );
};

export default Map;
