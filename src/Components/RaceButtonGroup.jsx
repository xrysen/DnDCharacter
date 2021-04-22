import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useEffect, useState } from "react";

const RaceButtonGroup = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [raceButtons, setRaceButtons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/races")
    .then((res) => res.json())
    .then((result) => {
      setRaceButtons(result);
      setIsLoaded(true);
    })
  }, []);

  if (isLoaded) {
    return (
      <div>  
      {raceButtons.map((item) => (
          <Button style={{marginRight: "10px", marginTop: "10px"}}>{item.name}</Button>
        ))}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default RaceButtonGroup;
