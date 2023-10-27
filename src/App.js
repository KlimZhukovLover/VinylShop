import Card from "./components/Card/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
import React from "react";




function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://651051e03ce5d181df5d24cd.mockapi.io/items').then((response) => {
      return response.json();
    }).then(json => {
      setItems(json);
    });

  }, []);

  const onAddToCart = (obj) =>{
    setCartItems(prev => [...prev, obj]);
  };



  return (
    <div className="wrapper">
      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
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
              onFavorite={() => console.log(obj)}
              onClickPlus={onAddToCart} />
          ))}

        </div>
      </div>

    </div>
  );
}

export default App;
