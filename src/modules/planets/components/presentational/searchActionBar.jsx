import * as React from "react";
import { Grid } from "@material-ui/core";
import { TextBox, Text } from "../../../../shared/components";

export class SearchActionBar extends React.PureComponent {
  render() {
    const { handleInputChange } = this.props;
    return (
      <>
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          style={{ marginBottom: "34px", marginTop: "26px" }}
        >
          <Grid item sm={1}>
            <Text> Search By</Text>
          </Grid>

          <Grid item sm={8}>
            <TextBox
              id="serachPlanet"
              placeholder="Please search a planet"
              label="Search Planet"
              handleInputChange={handleInputChange}
              fullWidth={true}
              // disabled={planetList && planetList.length === 0}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}
