import * as React from "react";
import { Tables, Loader } from "../../../../shared/components";
export class PlanetWrapper extends React.PureComponent {
  render() {
    const headers = [
      { label: "Id", value: "id" },
      { label: "Body", value: "body" },
      { label: "Title", value: "title" }
    ];
    const { planetList } = this.props;
    return (
      <>
        {planetList && planetList.length > 0 ? (
          <Tables headers={headers} rowData={planetList}></Tables>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}
