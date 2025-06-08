import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

function Home() {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-screen">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;
