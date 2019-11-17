import * as React from "react";
import { connect } from "react-redux";
import { PlanetWrapper } from "../presentational/planetWrapper";
import { SearchActionBar } from "../presentational/searchActionBar";
import { getPlanetListByPage } from "../../actions/planetActionRoot";
import { showToastr } from "../../../../common/actions/toastrAction";
import { Loader } from "../../../../shared/components";
import { getAllPlanetList } from "../../../../api/planetApi";
class PlanetContainer extends React.PureComponent {
  state = {
    filteredList: [],
    isLoading: false,
    searchTerm: "",
    planets: []
  };
  timerSet = false;
  timer = 0;
  searchCount = 0;
  pageCount = 1;
  componentDidMount() {
    this.fetchPlanets();
  }

  async fetchPlanets() {
    let pageNo = 1;
    let results = await getAllPlanetList(pageNo);

    while (results && results.data && results.data.next != null) {
      this.setState({
        planets: [...this.state.planets, ...results.data.results],
        filteredList: [...this.state.planets, ...results.data.results],
        isLoading: true
      });
      results = await getAllPlanetList(++pageNo);
      this.setState({
        isLoading: false
      });
    }
  }
  fetchSearchedPlanet = searchQuery => {
    const result = this.state.planets.filter(item => {
      if (item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) {
        return item;
      }
      return null;
    });
    this.setState({ filteredList: result, searchTerm: searchQuery }, () => {});
  };
  setTimer = () => {
    this.timer = setTimeout(() => {
      clearTimeout(this.timer);
      this.searchCount = 0;
      this.timerSet = false;
    }, 60000);
  };
  handleSearch = searchTerm => {
    if (this.timerSet === false) {
      this.setTimer();
    }
    if (this.props.username !== "Luke Skywalker") {
      if (this.timer && this.searchCount <= 15) {
        this.fetchSearchedPlanet(searchTerm.target.value);
        this.searchCount++;
      }
      if (this.searchCount === 16) {
        this.props.showToastr({
          toastrMessage:
            "You are not authorised to perform more than 15 searches per minute.",
          toastrType: "warning"
        });
      }
    } else {
      this.fetchSearchedPlanet(searchTerm.target.value);
    }
  };

  render() {
    return (
      <>
        <SearchActionBar
          handleInputChange={this.handleSearch}
          planetList={this.state.filteredList}
        />
        <PlanetWrapper
          planetList={
            this.state.searchTerm === ""
              ? this.state.planets
              : this.state.filteredList
          }
        />
        {this.state.isLoading && <Loader />}
      </>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  showToastr: toasterObj => dispatch(showToastr(toasterObj)),
  getPlanetListByPage: pageNo => dispatch(getPlanetListByPage(pageNo))
});
const mapStateToProps = state => ({
  username: state.login && state.login.username
});
export default connect(mapStateToProps, mapDispatchToProps)(PlanetContainer);
