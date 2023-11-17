
import GameGrid from "../components/GameGrid/GameGrid";
import OptionBar from "../components/OptionBar/OptionBar";
import Sidebar from "../components/SideBar/Sidebar";

const Screen = () => {
  
  const mainContentScreenStyle: React.CSSProperties = {
    display: "flex",
    width:  "100%",
    backgroundColor: "powderblue", 
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
