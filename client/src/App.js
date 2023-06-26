import {BrowserRouter as Router} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/navbar/navbar';
import AllRoutes from './components/AllRoutes';
import { fetchAllQuestions } from './actions/question';
import {fetchAllUsers} from './actions/users.js'
function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllQuestions())
    
  }
  ,[dispatch])
  dispatch(fetchAllUsers())

  return (

    <div className="App">
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;