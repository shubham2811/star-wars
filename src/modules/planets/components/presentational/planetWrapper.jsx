import * as React from "react";
import { Tables, Text, Modal } from "../../../../shared/components";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
export class PlanetWrapper extends React.PureComponent {
  state = {
    isModalOpen: false,
    planetDetails: null
  };

  handleButtonClick = row => {
    this.setState({ isModalOpen: true, planetDetails: row });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { planetList } = this.props;
    const headers = [
      { label: "Name", value: "name" },
      { label: "Polpulation", value: "population" },
      { label: "Surface Water", value: "surface_water" }
    ];
    return (
      <>
        {planetList && planetList.length > 0 ? (
          <>
            <Text>Total Records:{planetList.length}</Text>
            <Tables
              headers={headers}
              rowData={planetList}
              handleClick={this.handleButtonClick}
            ></Tables>
            {this.state.isModalOpen ? (
              <Modal
                isOpen={this.state.isModalOpen}
                handleClose={this.closeModal}
              >
                <DialogTitle id="form-dialog-title">Planet Details</DialogTitle>
                <DialogContent>
                  <List>
                    <ListItemText
                      primary="Planet Name"
                      secondary={this.state.planetDetails.name}
                    />

                    <ListItemText
                      primary="Planet Climate"
                      secondary={this.state.planetDetails.climate}
                    />
                    <ListItemText
                      primary="Planet Diameter"
                      secondary={this.state.planetDetails.diameter}
                    />
                    <ListItemText
                      primary="Planet Orbital Period"
                      secondary={this.state.planetDetails.orbital_period}
                    />
                    <ListItemText
                      primary="Planet Rotation Period"
                      secondary={this.state.planetDetails.rotation_period}
                    />
                    <ListItemText
                      primary="Planet Terrian"
                      secondary={this.state.planetDetails.terrain}
                    />
                  </List>
                </DialogContent>
              </Modal>
            ) : null}
          </>
        ) : (
          "No Records Found"
        )}
      </>
    );
  }
}
