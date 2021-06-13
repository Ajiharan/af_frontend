import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FoodList from "./home/FoodList";
import Food from "./home/Food";
import Category from "./home/Category";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={FoodList} />
          <Route path="/food" component={Food}/>
          <Route path="/category" component={Category}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
