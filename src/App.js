// App.js
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Index from './components/Index-compo';
import Create from './components/Create'
import Details from './components/Details'
import Edit from './components/Edit'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index></Index>}></Route>
          <Route path='/Create' element={<Create></Create>}></Route>
          <Route path='/details' element={<Details></Details>}></Route>
          <Route path='/edit' element={<Edit></Edit>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
