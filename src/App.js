import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FoodList from "./home/FoodList";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={FoodList}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
