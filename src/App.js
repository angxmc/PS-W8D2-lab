import React from "react";
import "./styles.css";
//import card1
import Card1 from "./components/Card";
import Card2 from "./components/Card2";
// IMPORT DATA
import cardsArr from "./data";
console.log("this is cardsArr:", cardsArr);

export default function App() {
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        <section className="cards">
          {cards}
          {/* <Card1 title="Santorini" />
    <Card2 /> */}
        </section>
      </section>
    </div>
  );
}
const cards = cardsArr.map((ele, index) => {
  return (
    <Card1
      {...ele}
      key={index}
    />
  );
});

console.log("this is cards:", cards);
