/*import { BrowserRouter ,Routes,Route ,Link } from 'react-router-dom';
import './App.css'

function App() {

  return <div>
    
    <BrowserRouter>
    <Link to="/">|  Allen  |</Link>
    <Link to="/neet/online-coaching-class-11">  Class 11  |</Link>
    <Link to="/neet/online-coaching-class-12">  Class 12</Link>
    <Routes>
    <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
      <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}/>
      <Route path="/" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}
function Landing(){
  return <div>
    Welcome! to Allen
  </div>
}
function Class11Program(){
  return <div>
    NEET Program for 11th Class Students
  </div>
}
function Class12Program(){
  return <div>
    NEET Program for 12th Class Students
  </div>
}

export default App
*/

import {useState,useRef} from 'react'
import './App.css'

function App(){
  const [currentCount,setCurrentCount] = useState(1);
  //let timer=0; every time a new render happens the value will be reset to 0
  const timer  = useRef(null);  
  function startClock(){
    let value = setInterval(()=>{
       setCurrentCount(c => c + 1);
      } ,1000);
      timer.current=value;
  }
  function stopClock(){
    clearInterval(timer.current);
  } 
  return <div>
    {currentCount}
    <br/>
    <button onClick={startClock}>Start Clock</button>
    <button onClick={stopClock}>Stop Clock</button>
  </div>
}

export default App;