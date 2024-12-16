import React from 'react';
import { useContext } from 'react';
import { ItemContext } from './ItemContext';
function Home() {
  
    const { items } = useContext(ItemContext);
    console.log('>>>items',items);

    return (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.name}>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.phone}</p>
                <img src={item.image} alt={item.name} />
              </li>
            ))}
          </ul>
        </>
    );
}

export default Home;