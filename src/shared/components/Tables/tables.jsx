import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styled from "styled-components";
const StyledTable = styled.div`
  max-height: 580px;
  overflow: auto;
`;
export class Tables extends React.PureComponent {
  render() {
    const { headers, rowData } = this.props;
    return (
      <StyledTable>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {headers.map(header => {
                return <TableCell key={header.label}>{header.label}</TableCell>;
              })}
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
              </TableRow>
            )) || []}
          </TableBody>
        </Table>
      </StyledTable>
    );
  }
}
