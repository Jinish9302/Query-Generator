import './App.css';
import {useState} from 'react'


function App() {
  const[qText, setQText] = useState("");
  const[inputText, setInputText] = useState("")
  const getQuery = (e)=> {
    e.preventDefault()
    setQText("SQL QUERY for " + inputText)
  }
  return (
    <div class="d-flex justify-content-center mt-5">
      <form action="" class="d-flex justify-content-center" onSubmit ={getQuery}>
        <table>
          <tr class="d-flex justify-content-center">
            <input value={inputText} type="text" onChange={e=>{setInputText(e.target.value)}}></input>
          </tr>
          <tr class="d-flex justify-content-center mt-2">
            <button type="submit" class="btn btn-success text-center">Generate</button>
          </tr>
          <tr class="d-flex justify-content-center mt-2">
            {qText}
          </tr>
        </table>
      </form>
    </div>
  );
}

export default App;
