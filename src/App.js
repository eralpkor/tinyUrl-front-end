import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import SubmitUrl from './components/SubmitUrl.js';
import Header from './components/header/Header';

const date = new Date()
const year = date.getFullYear()

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={SubmitUrl} />
        </Switch>
      </BrowserRouter>
      <div className="footer">
          Built by{" "}
          <a target="blank" href="https://eralpkor.com">
            Eralp
          </a> © {year}
        </div>
      
    </div>
  );
}

export default App;
