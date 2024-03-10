//App.jsx
import React, { useEffect, useState } from 'react';
import Card from './components/google-docs/Card';
import './App.css';
//import Accordian from './components/accordian';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className='App'>
      {/* <Accordian /> */}
      <h1>Family Favourites</h1>
      <div className='cards-container'>
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.Name}
              chocolate={item.Chocolate}
              movie={item.Movie}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
