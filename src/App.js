import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom/';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';
import TestDataTable from './components/TestDataTable';
import TableData from './pages/TableData';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navigation/>
      <Route path="/" component={Home} exact/>
      <Route path="/cart" component={Cart}/>
      <Route path="/dataTable" component={TableData}/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
