import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/516TM2qDJXL._SX1500_.jpg"
        alt="Amazon"
      />
      <div className="home__row">
        <Product
          id="12356489"
          title="Boat Rockerz 255 Pro"
          price={1399}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/31PU4kWou+L._AC_SX184_.jpg"
        />
        <Product
          id="12356489"
          title="Boat Rockerz 255 Pro"
          price={1399}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/31PU4kWou+L._AC_SX184_.jpg"
        />
        <Product
          id="12356489"
          title="Boat Rockerz 255 Pro"
          price={1399}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/31PU4kWou+L._AC_SX184_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12356489"
          title="Boat Rockerz 255 Pro"
          price={1399}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/31PU4kWou+L._AC_SX184_.jpg"
        />
        <Product
          id="12356489"
          title="Boat Rockerz 255 Pro"
          price={1399}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/31PU4kWou+L._AC_SX184_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12356489"
          title="Boat Rockerz 255 Pro"
          price={1399}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/31PU4kWou+L._AC_SX184_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
