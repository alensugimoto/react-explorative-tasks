import MyCard from "./MyCard";

const CardsContainer = ({ selected, cardsText }) => {
  const listItems = cardsText.map((value, index) => (
    <li>
      <MyCard value={value} highlight={index === selected} />
    </li>
  ));

  return (
    <div className="CardsContainer">
      <ol>{listItems}</ol>
    </div>
  );
};

export default CardsContainer;
