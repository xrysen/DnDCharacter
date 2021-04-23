import "./MainContainer.css";
import RaceButtonGroup from "./RaceButtonGroup";
import RaceInfo from "./RaceInfo";

const MainContainer = () => {
  return (
    <div className="main-container">
      <RaceButtonGroup />
      <RaceInfo name = "Dwarf" description = "It's a dwarf, what more do you need?" />
    </div>
  )
}

export default MainContainer;