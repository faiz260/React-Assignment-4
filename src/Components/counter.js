import React, {useState} from 'react';

function Counter(){
    let [count, setCount] = useState(0);
        return(
            <div>
                <h1>Counter value is { count} </h1>
                <button onClick={()=>setCount(++count )} >Update Counter</button>
            </div>
        )
}   

export default Counter;