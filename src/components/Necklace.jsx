import { useEffect, useState } from "react";
import { getAllJewelry } from "../facades/JewelryFacade.js";

export function JewelryComponent() {
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllJewelry();
        setJewelry(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Jewelry</h2>
      <ul>
        {jewelry.map((item) => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JewelryComponent;
