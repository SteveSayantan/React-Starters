import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './movie-db';
import { AppProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom';

const MovieDBSource = function (){

  return  <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
}

export default MovieDBSource;

