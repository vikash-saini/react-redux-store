import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom/';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navigation/>
      <Route path="/" component={Home} exact/>
      <Route path="/cart" component={Cart}/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
