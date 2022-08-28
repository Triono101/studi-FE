import React from "react";
import Categories from "../components/Categories";
import Product from "../components/HomePage";

const Home = () => {
  return (
    <div>
      <Categories />
      <main>
        <Product />
      </main>
      <br /> <br />
    </div>
  );
};

export default Home;
