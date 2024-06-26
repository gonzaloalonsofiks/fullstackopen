import { useState } from "react";

// Header
const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

// Componente de Resultados
const Results = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

// Componente de Botón
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

// Componente de Estadísticas
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const positives = (good / total) * 100;

  return (
    <>
      <Header title="Statistics" />
      {total != 0 ? (
        <>
          <table cellPadding={3} cellSpacing={3}>
            <Results text="Good:" value={good} />
            <Results text="Neutral:" value={neutral} />
            <Results text="Bad:" value={bad} />
            <Results text="Total:" value={total} />
            <Results text="Average:" value={average || 0} />
            <Results text="Positives (%):" value={positives || 0} />
          </table>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div>
      <Header title="Give feedback" />
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
