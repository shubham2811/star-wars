import * as React from "react";
import { Grid } from "@material-ui/core";
import { TextBox, Text } from "../../../../shared/components";
export class SearchActionBar extends React.PureComponent {
  state = {
    isModalOpen: false
  };
  onTextChange = () => {
    alert();
  };

  showModalHandler = () => {
    this.setState({ isModalOpen: true });
  };
  closeModalHandler = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item sm={1}>
            <Text> Search By</Text>
          </Grid>

          <Grid item sm={2}>
            <TextBox
              id="employeeName"
              placeholder="Enter Employee Name"
              label="Employee Name"
              htmlFor="employeeName"
              onTextChange={() => this.onTextChange}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}
