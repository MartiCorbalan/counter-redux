import './App.css';
import {useDispatch, useSelector } from "react-redux"
import {increaseCounter, decreaseCounter, resetCounter} from "./actions/counterActions"
function App() {
  const count = useSelector((store) => store.counterReducer.count);
  
  const dispatchCounter = useDispatch()
  return (
    <div className='App'>
      <header className='App-header'>
        <p>{count}</p>
        <button onClick={()=>dispatchCounter(increaseCounter(1)) }>incrementar 1</button>
        <button onClick={()=>dispatchCounter(increaseCounter(5))}>incrementar 5</button>
        <button onClick={()=>dispatchCounter(decreaseCounter(1))}>decrease 1</button>
        <button onClick={()=>dispatchCounter(decreaseCounter(5))}>decrease 5</button>
        <button onClick={()=>dispatchCounter(resetCounter())}>reset</button>
      </header>
    </div>
   
  );
}

export default App;
