import React, {Component} from 'react';
import {Frame} from './components'
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import { mainRoutes } from "./routes"

const menus = mainRoutes.filter( route => route.isNav === true )

class App extends Component {
  render(){
    return (
      <Router>
        <Frame menus = {menus}>
          <Switch>
          {mainRoutes.map(route => {
            return(
              <Route
                key = {route.pathname}
                path = {route.pathname}
                exact = {route.exact}
                render= {(routeProps) => {
                  return <route.component {...routeProps} />
                }}
              />
            )
          })}
            <Redirect to="/Home" from="/" exact />
            <Redirect to="/404" />
            <Route component={mainRoutes[-1]} />
          </Switch>
        </Frame>
      </Router>
      )
  }
}

export default App;
