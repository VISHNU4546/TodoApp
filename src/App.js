
import './App.css';
import TodoList from './component/TodoList';
// import Test from './component/Test';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 >Hello </h1>
        {/* <Test name = {name}></Test> */}
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
