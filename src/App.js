import CardsContainer from "./CardsContainer";

function App() {
  const selected = 0;
  const cardsText = ["My first card", "My second card"];

  return (
    <div className="App">
      <CardsContainer selected={selected} cardsText={cardsText} />
    </div>
  );
}

export default App;
