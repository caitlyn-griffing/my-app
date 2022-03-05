import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Project from './components/Project/Project';
import Main from './components/Main/Main';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Main />
      <Project />
      {/* <Switch>
        <Route path='/' exact />
      </Switch> */}
    </Router>
    </>
  );
}

export default App;

