import React from "react";

const styles = {
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: "5vh",
    paddingBottom: "5vh",
    width: "94%"
  }
  }

const Cards = (props) => {
  return (
    <div>
      <ul className="cards-container" style = {styles.cardsContainer}>
        {props.cards.map((card, index) => (
          <li key={index} className="card">
            {card.title}
            {card.image}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;