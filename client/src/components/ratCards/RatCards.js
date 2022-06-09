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
        {props.ratCards.map((ratCards, index) => (
          <li key={index} className="card">
            <h3>{ratCards.ratName}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
// {card.image}
//         title: <h3>{ratName}</h3>,
//         image: <img style={{ width: "200px" }} src={rat1} alt="RAT 1" />,
//       },