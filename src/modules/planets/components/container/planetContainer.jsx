import * as React from "react";
import { connect } from "react-redux";
import { PlanetWrapper } from "../presentational/planetWrapper";
import { SearchActionBar } from "../presentational/searchActionBar";
import { getPlanetList } from "../../actions/planetActionRoot";

class PlanetContainer extends React.PureComponent {
  componentDidMount() {
    // this.props.getCabsList();
  }
  render() {
    const { planetList } = this.props;
    return (
      <>
        <SearchActionBar />
        <PlanetWrapper planetList={planetList} />
      </>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getPlanetList: () => dispatch(getPlanetList())
});
const mapStateToProps = state => ({
  // cabList: state.cabs.cabList
});
export default connect(mapStateToProps, mapDispatchToProps)(PlanetContainer);
