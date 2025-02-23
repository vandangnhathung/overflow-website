import Navbar from "@/components/navigation/navbar";
import React from "react";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      Home
      <Navbar />
      {children}
    </div>
  );
};

export default Home;
