import Card from "./components/Card/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
import React from "react";




function App() {
  const [items, setItems] = React.useState([{
    "author": "Molchat Doma",
    "name": "Monument (Yellow Egg Drop Vinyl)",
    "price": 29.99,
    "img": "img/cards-img/1.jpg"
   },
   {
    "author": "Molchat Doma",
    "name": "Monument (Yellow Egg Drop Vinyl)",
    "price": 29.99,
    "img": "img/cards-img/1.jpg"
   },
   {
    "author": "Molchat Doma",
    "name": "Monument (Yellow Egg Drop Vinyl)",
    "price": 29.99,
    "img": "img/cards-img/1.jpg"
   },
   {
    "author": "Molchat Doma",
    "name": "Monument (Yellow Egg Drop Vinyl)",
    "price": 29.99,
    "img": "img/cards-img/1.jpg"
   },
   {
    "author": "Molchat Doma",
    "name": "Monument (Yellow Egg Drop Vinyl)",
    "price": 29.99,
    "img": "img/cards-img/1.jpg"
   },
   {
    "author": "Molchat Doma",
    "name": "Monument (Yellow Egg Drop Vinyl)",
    "price": 29.99,
    "img": "img/cards-img/1.jpg"
   },
   {
    "author": "Molchat Doma",
    "name": "Monument (Yellow Egg Drop Vinyl)",
    "price": 29.99,
    "img": "img/cards-img/1.jpg"
   },
   {
    "author": "Molchat Doma",
    "name": "Monument (Yellow Egg Drop Vinyl)",
    "price": 29.99,
    "img": "img/cards-img/1.jpg"
   },
   {
    "author": "Molchat Doma",
    "name": "Monument (Yellow Egg Drop Vinyl)",
    "price": 29.99,
    "img": "img/cards-img/1.jpg"
   },
   {
    "author": "Molchat Doma",
    "name": "Monument (Yellow Egg Drop Vinyl)",
    "price": 29.99,
    "img": "img/cards-img/1.jpg"
   }
  ]);
  const [cartOpened, setCartOpened] = React.useState(false)

  return (
    <div className="wrapper">
      {cartOpened ? <Cart onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content">
        <div className="content-header">
          <h1>All vinyl records</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="vinyl">

          {items.map((obj) => (
            <Card
              author={obj.author}
              name={obj.name}
              price={obj.price}
              img={obj.img}
              onClickPlus={() => console.log(obj)} />
          ))}

        </div>
      </div>

    </div>
  );
}

export default App;
