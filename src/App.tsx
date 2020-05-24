/** 
  * @desc Application root
  * @author Leon Li bbddstory@live.com
  */
import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { requestInterceptor, responseInterceptor } from './api/interceptor';
import NewsList from './components/NewsList/NewsList';
import CommentsList from './components/CommentsList/CommentsList';
import './App.scss';

export const App: React.FC = () => {
  // Axios global interceptor setup
  useEffect(() => {
    requestInterceptor(); // Request interceptor
    responseInterceptor(); // Response interceptor
  }, []);

  return (
    <Router>
      <NewsList path="/" />
      <CommentsList path="comments/:itemId" />
    </Router>
  );
}

export default App;
