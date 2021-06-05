import { IconButton, Input } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useState } from "react";
import MyCard from "./MyCard";

function CardsContainer(props) {
  const [selected, setSelected] = useState(props.selected);
  const [cardsText, setCardsText] = useState(props.cardsText);

  const handleClick = () => {
    const newCardsText = [...cardsText, ""];
    setCardsText(newCardsText);
  };

  const handleChange = (event) => {
    const newSelected = Number(event.target.value);
    setSelected(newSelected);
  };

  return (
    <div className="CardsContainer">
      <IconButton onClick={handleClick}>
        <Add />
      </IconButton>
      <form>
        <Input type="number" defaultValue={selected} onChange={handleChange} />
      </form>
      <ol>
        {cardsText.map((value, index) => (
          <li key={index}>
            <MyCard value={value} highlight={index === selected} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default CardsContainer;
