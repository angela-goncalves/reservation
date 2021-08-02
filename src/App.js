import "./App.css";
import React, { useState, useReducer } from "react";
import Reservation from "./components/Reservation";
import Nav from "./components/Nav";
import Header from "./components/Header";
import image from "./plateHeader.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import useLocalStorage from "../useLocalStorage";

const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
  TAGGLE_TODO: "taggle-todo",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [];
    case ACTIONS.DELETE_TODO:
      return {};
    case ACTIONS.TAGGLE_TODO:
      return {};
    default:
      return todos;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    people: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO });
    setValue("");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log("state:", value);
    console.log(name, value);

    setValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <Router>
      <div className="w-ful px-6 pb-4 bg-black flex flex-col items-center lg:pl-44 lg:pr-0 lg:items-start lg:relative">
        <img
          src={image}
          alt="Logo"
          className="w-full max-w-md lg:max-w-lg lg:absolute lg:-right-28 lg:transform lg:rotate-90"
        />
        <Nav />
        <Header />
        <Switch>
          <Router path="/" exact component={App} />
          <Route path="/reservation" component={Reservation} />
        </Switch>
        <Reservation
          todos={todos}
          handleSubmit={handleSubmit}
          value={value}
          setValue={setValue}
          handleOnChange={handleOnChange}
          dispatch={dispatch}
        />
      </div>
    </Router>
  );
}

export default App;
