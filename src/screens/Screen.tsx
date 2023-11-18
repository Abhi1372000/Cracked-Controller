
import React from "react";
import GameGrid from "../components/GameGrid/GameGrid";
import OptionBar from "../components/OptionBar/OptionBar";
import Sidebar from "../components/SideBar/Sidebar";

interface ScreenProps{
  drkMod: boolean;
}

const Screen: React.FC<ScreenProps> = (drkMod) => {
  
  const mainContentScreenStyle: React.CSSProperties = {
    display: "flex",
    width:  "100%",
    backgroundColor: drkMod.drkMod ? "#151515" : "white", 
  }

  return (
    <>
      <OptionBar />
      <div className="mainContentScreen" style={mainContentScreenStyle}>
        <Sidebar />
        <GameGrid />
      </div>
    </>
  );
};

export default Screen;
