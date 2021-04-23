import "./RaceInfo.css";

const RaceInfo = (props) => {
  return (
    <div>
      <h1 className="race-header">{props.name}</h1>
      <p className="race-info">
        {props.description}
      </p>
    </div>
  )
}

export default RaceInfo;