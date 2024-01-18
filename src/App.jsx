import './App.css';
import { useState } from 'react';

function App() {
  //let lista = ["mancare","somn"];
  const [todo, setTodo] = useState("");
  const [lista, setLista] = useState([]);
  function adauga(){
   setLista([...lista, todo]);
  }
  function reset(){
    setLista([]);
  }
  return (
    <div>
      <input value={todo} onChange={(e)=> setTodo(e.target.value)} placeholder='Ce vrei sa faci?'></input>
      <button onClick={adauga}>Adauga</button>
      <button onClick={reset}>Reset</button>
      <ol>
        {
          lista.map((el) =>{
                return(
                  <li>{el}</li>
                )
          })
        }
      </ol>
    </div>
  );
}

export default App;
