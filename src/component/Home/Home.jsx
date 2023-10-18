import React from "react";
import Header from "./Header";
import SearchByInput from "./SearchContainer/SearchByInput";

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1F1E23]">
      <Header />
      <SearchByInput />
    </div>
  );
}

export default Home;
