import React, {useState} from 'react';
import Counter from './Components/counter'
import './App.css';


function App() {

  let [isDay, changeDay] = useState(true)
 
  return (
    <div className=  {isDay ? "Day": "Night"}>

    <h1>Time = {isDay ? "Day": "Night"} </h1>

    <button onClick={()=>changeDay(!isDay)} >Change {isDay ? "Day": "Night"} </button>



    <Counter/>
    </div>
  );
}

export default App;
