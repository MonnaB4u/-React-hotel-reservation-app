import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Hotel from './Pages/Hotel/Hotel';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";





function App() {

  return (
    <div className="">
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
