import { useState } from "react";

// Componente Botón
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

// Componente que muestra los votos
const Votes = ({ content, selected, points }) => {
  return (
    <div>
      has <em>{points[selected].count}</em> votes
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  // Función para votar
  const addVote = (index) => {
    const newPoints = [...points];
    newPoints[index]++;
    setPoints(newPoints);
    console.log("Voted for", index);
    console.log(newPoints);
  };

  // Función que selecciona un número random entre los elementos del array
  const selectRandom = () => {
    const totalItems = anecdotes.length;
    const min = Math.ceil(0);
    const max = Math.floor(totalItems);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
  };

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <Votes content={anecdotes} selected={selected} points={points} />

      <Button text="Vote" onClick={() => addVote(selected)} />
      <Button
        text="Next anecdote"
        onClick={() => setSelected(selectRandom())}
      />
    </>
  );
};

export default App;
