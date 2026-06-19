function Sidebar() {
  const history = ["New project ideas", "Weekly report draft", "Recipe substitutions","Integral"];

  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <span className="dot"></span>
        JARVIS
      </div>

      <div className="sidebar-section-label">Recent</div>
      {history.map((item, index) => (
        <div key={index} className="sidebar-item">
          {item}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;