import React from 'react';
import logo from './logo.svg';
import './App.css';
import Candy from './Candy';
import Soda from './Soda';
import Fruit from './Fruit';
import VendingMachine from './VendingMachine';

import {BrowserRouter , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Route exact path='/'>
       <VendingMachine />
     </Route>
     <Route exact path = '/candy'>
       <Candy />
     </Route>
     <Route exact path = '/soda'>
       <Soda />
     </Route>
     <Route exact path = '/fruit'>
       <Fruit />
     </Route>
     </BrowserRouter>
    </div>
  );
}

export default App;