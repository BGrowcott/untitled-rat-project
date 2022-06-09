import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RATS } from "../../utils/queries";

import RatCards from "../ratCards/RatCards";
import rat1 from "../../images/rats/rat1.jpg";
import rat2 from "../../images/rats/rat2.jpg";

const ChooseARat = async () => {
  const { loading, data } = useQuery(QUERY_RATS);

  const ratData = data?.rats;
  console.log("Rat Data length:")
  
  if (rataData) {
    console.log(ratData.length);
  } else {
    console.log("No rat data");
  }

  const ratNames = ratData.map((rat) => (rat.name));

  const ratCards = ratNames.map((rat) => getRatCard(rat));

  console.log(ratCards + "This is the ratcards in the Choose A Rat file");
  const getRatCard = (ratName) => {
    return {
      title: ratName
    }
    };

  return (
    <div>
      <RatCards cards={ratCards} />
    </div>
  );
};

export default ChooseARat;
