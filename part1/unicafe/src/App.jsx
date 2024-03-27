import { useState } from "react";

// Header
const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

// Componente de Resultados
const Results = (props) => {
  return (
    <p>
      {props.score} {props.value}
    </p>
  );
};

// Componente de Botón
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header title="Give feedback" />

      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />

      <Header title="Statistics" />
      <Results score="Good:" value={good} />
      <Results score="Neutral:" value={neutral} />
      <Results score="Bad:" value={bad} />
    </div>
  );
};

export default App;
