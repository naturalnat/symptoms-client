import React from "react";
import SymptomsList from "./SymptomsList";

const Home = () => {
  return (
    <div class="container">
    <div>
      <a href="/newsymptom" class="btn btn-info" role="button">
        New Entry
      </a>
      <SymptomsList />
    </div>
    </div>
  );
};
export default Home;
