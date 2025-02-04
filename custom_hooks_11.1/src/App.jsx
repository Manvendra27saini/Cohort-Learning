/*
///Implementation of useCounter as first custom hook
import { useState } from 'react'
import './App.css'


function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return {
    count :count,
    increaseCount: increaseCount
  }
}
function App() {

  return (
    <div>
      <Counter/>
    </div>
  )
}

function Counter(){
  const {count, increaseCount} = useCounter();
  
  return (
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  )
}

export default App


///Implementation of useFetch hook
import { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch';


function App() {
  const [currentPost , setCurrentPost] = useState(1);
    const {finalData ,loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

    if(loading){
      return <h1>Loading...</h1>
    }
  
  return (
    <div>
      <button onClick={()=>setCurrentPost(1)}>1</button>
      <button onClick={()=>setCurrentPost(2)}>2</button>
      <button onClick={()=>setCurrentPost(3)}>3</button>
      <button onClick={()=>setCurrentPost(4)}>4</button>
     {JSON.stringify(finalData)}
    </div>
  )
}

export default App




//Implementation of usePrev hook
import { useEffect, useState } from 'react'
import './App.css'
import { usePrev } from './hooks/usePrev';


function App() {
  const [state , setState] = useState(0);
  const prev =usePrev(state);
    
  return (
    <>
    <p>{state}</p>
    <button onClick={()=> {
      setState((curr)=>curr+1);
    }}>Click me</button>
    <p>The previous value was {prev}</p>
    </>
  )
}

export default App





//Implementation of useDebounce  hook and why we need 
import { useEffect, useState ,useRef } from 'react'
import { useDebounce} from './hooks/useDebounce';

function App() {
  
  function sendDataToBackend(){
    fetch("api.amazon.com/search/")
  } 
  const debouncedFn =useDebounce(sendDataToBackend);
  return (
    <input type="text"  onChange={debouncedFn}></input>
  )
}

export default App

*/
//Implementation of useDebounce1 hook  which is modifeid from useDebounce and why we need 

import { useEffect, useState ,useRef } from 'react'
import { useDebounce} from './hooks/useDebounce1';

function App() {
  const [inputVal,setInputVal] =useState("")
  
  const debouncedValue =useDebounce(inputVal ,200);
  function change(e){
    setInputVal(e.target.value)
  }

  useEffect(() =>{
   console.log("Expensive Operation");
  },[debouncedValue])
  return (
    <input id="input" type="text"  onChange={change}></input>
  )
}

export default App
