import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddBook from './components/Books/AddBook';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
 <div className="App">
    <Navbar />
    <AddBook />
    </div>
    </BrowserRouter>
   
  );
}

export default App;
