import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Jada";
  const element = <h1>My name is {name}!!</h1>
  const element2 = <h1>1 + 1 = {1+1}</h1>
  return (
    <div>
      <h1>Hello, world!</h1>
      {element}
      {element2}
    </div>
  );
}

export default App;
