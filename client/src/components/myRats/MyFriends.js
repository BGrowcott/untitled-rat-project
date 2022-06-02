import React from "react";

const MyFriends = () => {
  const styles = {
    flex: {
      textAlign: "center",
    },
    friendsCards: {
      display: "flex",
      justifyContent: "space-evenly",
      border: "2px solid",
      boxShadow: "5px 5px gray",
      padding: "10px 100px 10px 100px",
    },
    friendImage: {
      border: "1px solid",
      boxShadow: "5px 5px gray",
      padding: "50px",
      borderRadius: "50%",
    },
    friendTitle: {
      textAlign: "center",
    },
    section: {
      marginTop: "100px",
      marginBottom: "100px",
    },
    addFriend: {
      display: "flex",
      justifyContent: "space-evenly",
      border: "1px solid",
      boxShadow: "5px 5px gray",
      padding: "20px 100px 20px 100px",
    },
    input: {
      width: "250px",
      height: "30px",
      marginRight: "10px",
    },
    btn: {
      height: "30px",
      cursor: "pointer",
    },
    inputBtn: {
      marginTop: "40px",
      marginLeft: "20px"
    },
  };

  return (
    <div style={styles.flex}>
      <section className="friends-container">
        <h2 style={styles.friendTitle}>My Friends</h2>
        <div className="friends-cards" style={styles.friendsCards}>
          <div className="single-cards">
            <img style={styles.friendImage} src="" alt="" />
            <h3>Username</h3>
          </div>

          <div>
            <img style={styles.friendImage} src="" alt="" />
            <h3>Username</h3>
          </div>

          <div>
            <img style={styles.friendImage} src="" alt="" />
            <h3>Username</h3>
          </div>
        </div>
      </section>

      <section className="add-friend-container" style={styles.section}>
        <h2 style={styles.friendTitle}>Add a Friend</h2>
        <div className="add-friend-card" style={styles.addFriend}>
          <img style={styles.friendImage} src="" alt="" />
          <div style={styles.inputBtn}>
            <input
              style={styles.input}
              className="input"
              placeholder="Enter your email address..."
            ></input>
            <button style={styles.btn}>Submit</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyFriends;
