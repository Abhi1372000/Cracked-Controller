import GenerList from "../GenerList/GenerList"

const Sidebar = () => {
    
    const SidebarStyle: React.CSSProperties = {
        backgroundColor: "red",
        width: "13%",
    }

  return (
    <>
      <div style={SidebarStyle}>
        <p>Sidebar</p>
        <GenerList />
      </div>
    </>
  )
}

export default Sidebar