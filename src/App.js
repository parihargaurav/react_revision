// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import  {Footer} from './MyComponents/Footer';
import { TodoItem } from './MyComponents/TodoItem';
import { Todos } from './MyComponents/Todos';
// we can use javascript in {inside here} for any work
function App() {
  return (
    <>

      <Header />
      <Footer/>
      <Todos />
      <TodoItem  />
    </>
    
  )
}

export default App;
