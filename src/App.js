import React from "react";
import Box from "@material-ui/core/Box";

function MyCard(props) {
  return (
    <Box border={props.highlight ? 1 : 0} borderColor="red">
      {props.value}
    </Box>
  );
}

function CardsContainer(props) {
  return (
    <ol>
      {props.cardsText.map((value, index) => (
        <MyCard value={value} highlight={index === props.selected} />
      ))}
    </ol>
  );
}

function App() {
  return (
    <CardsContainer
      selected={0}
      cardsText={["My first card", "My second card"]}
    />
  );
}

export default App;
