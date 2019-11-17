import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
const StyledTable = styled.div`
  max-height: 528px;
  overflow: auto;
`;
export class Tables extends React.PureComponent {
  handleplanetImageSize = population => {
    switch (true) {
      case population >= 1000 && population <= 6000000:
        return 5;
      case population >= 6000000 && population <= 30000000:
        return 10;
      case population >= 30000000 && population <= 1500000000:
        return 20;
      case population >= 1500000000 && population <= 421000000:
        return 30;
      case population >= 421000000 && population <= 18500000000:
        return 40;
      case population >= 18500000000:
        return 48;
      default:
        return 0;
    }
  };

  render() {
    const { headers, rowData, handleClick } = this.props;
    return (
      <StyledTable>
        <Table stickyHeader>
          <TableHead>
            <TableRow selected={true}>
              {headers.map(header => {
                return <TableCell key={header.label}>{header.label}</TableCell>;
              })}
              <TableCell>Planet Size</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map(row => (
              <TableRow key={row.id}>
                {headers.map(header => {
                  return (
                    <TableCell key={header.value}>
                      {row[header.value]}
                    </TableCell>
                  );
                })}
                <TableCell key={row.id}>
                  <svg width="100" height="100">
                    <circle
                      cx="50"
                      cy="50"
                      r={this.handleplanetImageSize(parseInt(row.population))}
                      stroke="black"
                      strokeWidth="3"
                      fill="blue"
                    />
                    Sorry, your browser does not support inline SVG.
                  </svg>
                </TableCell>
                <TableCell key={row.id}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={() => handleClick(row)}
                    color="primary"
                    size="small"
                  >
                    Check Details
                  </Button>
                </TableCell>
              </TableRow>
            )) || []}
          </TableBody>
        </Table>
      </StyledTable>
    );
  }
}
