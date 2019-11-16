import * as React from "react";
import { connect } from "react-redux";
import { LoginWrapper } from "../presentational/loginWrapper";
import { login } from "../../actions/loginActionRoot";
class LoginContainer extends React.PureComponent {
  render() {
    return <LoginWrapper login={this.props.login} />;
  }
}
const mapDispatchToProps = dispatch => ({
  login: details => dispatch(login(details))
});

export default connect(null, mapDispatchToProps)(LoginContainer);
