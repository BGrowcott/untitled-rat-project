import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_USERS_RATS } from "../../../utils/queries";
import Auth from "../../../utils/Auth";
import RatCard from "./ratCards";
import styles from "./ratStyles";

function ViewMyRats(props) {

  const userId = Auth.getProfile().data._id

  const { loading, data } = useQuery(QUERY_USERS_RATS, {
    variables: {id: userId}
  });
  const rats = data?.user.rats || [];

  function displayAdoptRatButton(){
    if (rats.length === 0) {
      return <button style={styles.adoptRatButton} className="adopt-btn" data-page="createRat" onClick={props.sideMenuSelection}>+ Adopt a Rat</button>;
    }
  }

  return (
    <div style={styles.all}>
    <header className="header" style={styles.heading}>
      <h1 className="title" style={styles.title}>My Rats</h1>
    </header>
    {displayAdoptRatButton()}
    <ul style={styles.cardWrapper}>
      {rats.map((rat, index) => (<RatCard key={index} rat={rat}/>))}
      </ul>
    </div>
  );
};

export default ViewMyRats;
