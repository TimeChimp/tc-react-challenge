import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Discover from './Discover';

export default function Routes() {
  return (
    <Switch>
      <Route path='/discover' component={Discover} />
      <Redirect to='/discover' />
    </Switch>
  )
}
