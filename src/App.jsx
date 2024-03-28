import './App.css';
//import Navbar from './components/Navbar';
import Addfood from './components/Addfood';
import Fooddetails from './components/Fooddetails';
import Home from './components/Home';
import Navbar1 from './components/Navbar1';
import Searchfood from './components/Searchfood';
import Orders from './components/Orders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Updatefood from './components/Updatefood';

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar1/>
        <Switch>

          <Route exact path="/"> <Home/> </Route>
          <Route path="/addfood"> <Addfood/> </Route>
          <Route path="/fooddetails:id"> <Fooddetails/> </Route>
          <Route path="/search:searchKey"> <Searchfood/> </Route>
          <Route path="/update:id"> <Updatefood/> </Route>
          <Route path="/orders"> <Orders/> </Route>

      </Switch>
    </div>
  </Router>
  );
}
export default App;
