import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Project from './components/Project/Project';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Project />
      <Project />
      <Project />
      {/* <Switch>
        <Route path='/' exact />
      </Switch> */}
    </Router>
    </>
  );
}

export default App;

