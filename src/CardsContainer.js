import { IconButton, Input } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useState } from "react";
import MyCard from "./MyCard";

function CardsContainer(props) {
  const [selected, setSelected] = useState(props.selected);
  const [cardsText, setCardsText] = useState(props.cardsText);

  const handleClick = () => {
    setCardsText((prevCardsText) => [...prevCardsText, ""]);
  };

  const handleSelectedChange = (event) => {
    setSelected(Number(event.target.value));
  };

  const handleCardsTextChange = (event, index) => {
    setCardsText((prevCardsText) =>
      prevCardsText.map((value, i) => {
        if (i === index) {
          return event.target.value;
        } else {
          return value;
        }
      })
    );
  };

  return (
    <div className="CardsContainer">
      <IconButton onClick={handleClick}>
        <Add />
      </IconButton>
      <Input
        type="number"
        defaultValue={selected}
        onChange={handleSelectedChange}
      />
      <ol>
        {cardsText.map((value, index) => (
          <li key={index}>
            <MyCard
              value={value}
              highlight={index === selected}
              onChange={(event) => handleCardsTextChange(event, index)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default CardsContainer;
