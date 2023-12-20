import React, { useState, useEffect } from 'react';
import { Navibar } from './Navbar.jsx';
import { Menus } from './Menu.jsx';

export function Necklace() {
  return (
    <>
      <Navibar />
      <Menus />
      <YourComponent />
    </>
  );
}

const YourComponent = () => {
  const [necklaces, setNecklaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/jewelry');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("fetched data", data);


        const necklaceItems = data.jewelry.filter(item => item.type === 'necklace');
        console.log("necklaceItems", necklaceItems);
        
        setNecklaces(necklaceItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h2>Necklaces</h2>
      <ul>
        {necklaces.map(necklace => (
          <li key={necklace.id}>
            {necklace.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
