import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

// First, fetching all values from the API,

function App() {
  const [cards, setCards] = useState([]);

  // async
  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/users"); //api
    let data = await a.json(); //  converting them to JSON, 
    setCards(data); // passing them into an array,
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        {cards.map((card) => {
          return ( 
             //  retrieving the data using map
             // displaying it.
            <div key={card.id} className="bg-blue-500 rounded-2xl  card">
              <h1 className="text-xl font-semibold uppercase">{card.name}</h1> <br />
              <p>Company Name:{card.company.name}</p>       
              <p>Email: {card.email} </p> <br />
              <span>Website: {card.website}</span> 
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
