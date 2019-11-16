import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Root } from "./common/root";
import { connect } from "react-redux";
import { Toastr } from "./shared/components";
import { closeToastr } from "./common/actions/toastrAction";
class App extends React.Component {
  render() {
    const { toastr, closeToastr } = this.props;
    return (
      <Router>
        <Root />
        {this.props.toastr.showToastr && (
          <Toastr toastr={toastr} closeToastr={closeToastr} />
        )}
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  closeToastr: () => dispatch(closeToastr())
});
const mapStateToProps = state => ({
  toastr: state && state.toastr
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
