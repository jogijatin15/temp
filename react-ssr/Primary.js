import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './src/component/App';

class Primary extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" render={props => (
            <App {...props} />
          )} />
        </Switch>
      </BrowserRouter>
    )
  }

}

export default Primary
