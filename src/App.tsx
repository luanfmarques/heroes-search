import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import HeroDetails from "./Pages/HeroDetails/HeroDetails";
import Layout from "./components/Layout/Layout";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero-details/:id" element={<HeroDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
