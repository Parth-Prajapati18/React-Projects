import './App.css';
import Navbar from './Components/NavBar'
import Carousel from './Components/Carousel'
import Picker from './Components/Picker'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
   <>
   <Router>
   <Navbar></Navbar>
   <Picker></Picker>
     <Switch>
        <Route path="/">
          <Carousel />
        </Route>
        <Route path="/picker">
          <Picker></Picker>
        </Route>
      </Switch>
   </Router>
   </>
  );
}

export default App;
