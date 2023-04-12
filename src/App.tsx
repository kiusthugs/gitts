import ResultsSection from "./ResultsSection"
import {useState} from "react"

function App():JSX.Element {

  const API_URL:string = "https://api.github.com";

  const [userInput, setUserInput] = useState<string>("")
  const [user, setUser] = useState<Object>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setUserInput(e.target.value)
  };

  function findUser(userInput: string):void {

    ///search/users?q=${query}`
    const append = `${API_URL}/search/users?q=${userInput}`
    fetch(append)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log(typeof data)
      setUser(data.items[0])})

  }

  return(<>
  <h1>GitHub User Search</h1>
  <input type="text" id="message" name="message" onChange={handleChange} value={userInput}></input>
  <button onClick={() => findUser(userInput)}>Submit</button>
  {user && <ResultsSection user={user}/>}
  </>)
}

export default App
