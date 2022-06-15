import React, { useState } from "react";
import AllRats from "./AllRats";
import Shop from "./Shop";
import Jobs from "./Jobs";
import Cemetery from "./Cemetery";
import MyFriends from "./MyFriends";
import Auth from "../../utils/Auth";
import Inventory from "../inventory/Inventory";
import $ from "jquery";
import { borderRadius } from "@mui/system";

function MyRats() {
  const styles = {
    section: {
      display: "flex",
      justifyContent: "space-around"
    },
    aside: {
      width: "18%",
      padding: "10px",
      backgroundColor: "#ff5252",
      borderRadius: "10px",
      boxShadow: "0px 0px 5px black inset",
    },
    mainArea: {
      width: "75%",
      backgroundColor: "whitesmoke",
      borderRadius: "20px",
      border: "5px solid #ff5252",
      boxShadow: "0px 0px 10px black inset"
    },
    list: {
      listStyleType: "none",
      margin: "0px",
      padding: "0px",
      padding: "10px",
    },
  };
  const username = Auth.getProfile().data.name;
  const [sideMenuChoice, setMenuChoice] = useState("allRats");
  const [showInventory, setShowInventory] = useState(false);

  function renderMenuChoice() {
    switch (sideMenuChoice) {
      case "allRats":
        return <AllRats />;
      case "shop":
        return <Shop />;
      case "jobs":
        return <Jobs />;
      case "cemetery":
        return <Cemetery />;
      case "myFriends":
        return <MyFriends />;
    }
  }

  function sideMenuSelection(e) {
    setMenuChoice(e.target.dataset.page);
  }

  function inventoryToggle(e) {
    if (showInventory) {
      setShowInventory(false);
      $("#viewInvButton").text("View Inventory");
    } else {
      setShowInventory(true);
      $("#viewInvButton").text("Hide Inventory");
    }
  }

  function inventoryView() {
    if (!showInventory) {
      return;
    } else {
      return <Inventory inventoryToggle={inventoryToggle} />;
    }
  }

  return (
    <section style={styles.section}>
      <aside className="boxStyle" style={styles.aside}>
        <div>
          <h2 className="textStyle">{username}'s Rat Hub</h2>
        </div>
        <ul style={styles.list}>
          <li>
            <button id="viewInvButton" onClick={inventoryToggle}>
              View Inventory
            </button>
          </li>
          <li data-page="allRats" onClick={sideMenuSelection}>
            <button data-page="allRats">My Rats</button>
          </li>
          <li data-page="shop" onClick={sideMenuSelection}>
            <button data-page="shop">Shop</button>
          </li>
          <li data-page="jobs" onClick={sideMenuSelection}>
            <button data-page="jobs">Jobs</button>
          </li>
          <li data-page="cemetery" onClick={sideMenuSelection}>
            <button data-page="cemetery">Cemetery</button>
          </li>
          <li data-page="myFriends" onClick={sideMenuSelection}>
            <button data-page="myFriends">My Friends</button>
          </li>
        </ul>
      </aside>
      <div style={styles.mainArea}>{renderMenuChoice()}</div>
      {inventoryView()}
    </section>
  );
}

export default MyRats;
