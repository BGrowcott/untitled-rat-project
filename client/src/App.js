import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateRat from "./components/createRat/CreateRat";
import MyRats from "./components/myRats/MyRats";

function App() {

  const styles = {
    main: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }

  return (
    <main style={styles.main}>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<CreateRat />} />
          <Route path="/myrats" element={<MyRats/>} />
        </Routes>
      <Footer />
      </Router>
    </main>
  );
}

export default App;
