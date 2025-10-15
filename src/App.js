import Header from "./Components/Header";
import TaskList from "./Components/Tasklist";
function App(){
  return (
    <div className="min-h-screen bg-gray-100">
      <Header  title= "React Dashboard"/>
            <TaskList/>

    </div>
  )
}

export default App;