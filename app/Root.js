import React from "react";
import SingleCandy from "./SingleCandy";
import CandyList from "./CandyList";

const Root = () => {
  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <CandyList />
        <SingleCandy />
        <p>What a nice home page for your goodies!</p>
      </main>
    </div>
  );
};

export default Root;
