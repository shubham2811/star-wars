import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { protectedRoutes } from './routeConfig';

export class Root extends React.Component {
  render() {
    return (
      <React.Suspense fallback={<div>Loading...></div>}>
        <Switch>
          {protectedRoutes &&
            protectedRoutes.map((route, i) => (
              <Route
                path={route.path}
                exact={route.exact}
                key={i}
                render={(props) => <route.component {...props} />}
              />
            ))}
          {/* {protectedRoutes &&
            protectedRoutes.map((route, i) => <ProtectedRoutes key={i} {...route} />)} */}
        </Switch>
      </React.Suspense>
    );
  }
}
