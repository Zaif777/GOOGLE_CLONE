import './App.css';
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom'; 

  

function App() {  
  return (
    <div className="App">

   <Router>
      <Link to='/home'></Link>
      <Link to='/search'></Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={'this is the search page'} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;