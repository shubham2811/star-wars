import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Toastr } from "./shared/components";
import { closeToastr, showToastr } from "./common/actions/toastrAction";
import { logout } from "./modules/login/actions/loginActionRoot";
import { PlanetModule, LoginModule } from "./routes";
import Header from "./common/header";
const ProtectedRoute = ({ component: Component, isLogin, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={props =>
        isLogin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
class App extends React.Component {
  handleLogout = () => {
    this.props.logout();
    this.props.showToastr({
      showToastr: true,
      toastrMessage: "Logout Successfully",
      toastrType: "success"
    });
  };

  render() {
    const { toastr, closeToastr } = this.props;
    return (
      <React.Suspense fallback={<div>Loading...></div>}>
        {this.props.isLogin && <Header handleLogout={this.handleLogout} />}
        <Switch>
          <Route path="/" exact component={LoginModule} />
          <ProtectedRoute
            path="/planets"
            component={PlanetModule}
            {...this.props}
          />
        </Switch>
        {toastr.showToastr && (
          <Toastr toastr={toastr} closeToastr={closeToastr} />
        )}
      </React.Suspense>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  closeToastr: () => dispatch(closeToastr()),
  showToastr: toastrObj => dispatch(showToastr(toastrObj)),
  logout: () => dispatch(logout())
});
const mapStateToProps = state => ({
  toastr: state && state.toastr,
  isLogin: state && state.login.isLogin
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
