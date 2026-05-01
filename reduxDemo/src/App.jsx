import './App.css'
import Todo from './components/todo' 
// FIX: component capital letter se import hota hai

function App() {
  return (
    <>
      <h1>TODO APP with redux</h1>
      <Todo /> 
      {/* FIX: <todo/> small letter galat tha */}
    </>
  )
}

export default App;