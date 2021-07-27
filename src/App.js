import "./App.css";
import Reservation from "./components/Reservation";
import Nav from "./components/Nav";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import useLocalStorage from "../useLocalStorage";

function App() {
  // const [tasks, setTasks] = useLocalStorage("tasks", inicialValue);
  return (
    <Router>
      <div className="pl-10 bg-black">
        <Nav />
        <Header />
        <Switch>
          <Route path="/reservation" component={Reservation}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
