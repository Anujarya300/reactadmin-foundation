import * as React from "react";
import * as ReactDOM from "react-dom";
import {HashRouter, Route, Switch} from 'react-router-dom';

// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';

import '../scss/style.scss'
import Hello from "./components/Hello";
import Full from './containers/Full/';

// Include styles into the app
require("./styles/style.scss");


ReactDOM.render(
    <HashRouter>
    <Switch>
      <Route path="/" name="Home" component={Full}/>
    </Switch>
  </HashRouter>,
    document.getElementById("app")
);