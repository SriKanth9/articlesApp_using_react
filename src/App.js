import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./styles.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Article from "./components/Article";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <Router>
      <div className="App">
        <ul className="Nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
        <Switch>
        
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/articles" component={Articles} />
          <Route path="/article/:id" component={Article} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
