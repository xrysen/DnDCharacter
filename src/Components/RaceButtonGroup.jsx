import Button from "react-bootstrap/Button";
import DropDownButton from "react-bootstrap/DropdownButton";
import DropDown from "react-bootstrap/DropdownItem";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useEffect, useState } from "react";

const RaceButtonGroup = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [subLoaded, setSubLoaded] = useState(false);
  const [raceButtons, setRaceButtons] = useState([]);
  const [subRaces, setSubRaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/subraces")
      .then((res) => res.json())
      .then((result) => {
        setSubRaces(result);
        setSubLoaded(true);
      });

    fetch("http://localhost:8000/races")
      .then((res) => res.json())
      .then((result) => {
        setRaceButtons(result);
        setIsLoaded(true);
      });
  }, []);

  if (isLoaded && subLoaded) {
    return (
      <ButtonGroup>
        {raceButtons.map((item) => {
          if (!item.hasSubRace) {
            return (
              <Button
                key={item.id}
                style={{ marginTop: "10px" }}
              >
                {item.name}
              </Button>
            );
          } else {
            return (
              <DropDownButton as={ButtonGroup} key={item.id} style={{ marginTop: "10px"}} title={item.name}>
                {item.subRaces.map((subRace) => {
                  return (
                    <DropDown key={subRace}>{subRaces[subRace - 1].name}</DropDown>
                  )
                })}
              </DropDownButton>
            )
          }
        })}
      </ButtonGroup>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default RaceButtonGroup;
