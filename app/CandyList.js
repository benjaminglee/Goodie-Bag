import React from "react";
import SingleCandy from "./SingleCandy";
import { useSelector } from "react-redux";

const CandyList = () => {
  const candies = useSelector((state) => state.candy);
  console.log(candies);
  return <h1>I love candy!!!!</h1>;
};

export default CandyList;
