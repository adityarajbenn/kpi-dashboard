import styled from "styled-components";

const TableContainer = styled.div`
  background: white;
  border-radius: 16px;
  border: 0.5px solid #CDD5DF;
  width: 100%;
  margin-top: 30px;
  overflow: hidden;
`;

const TableWrapper = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  height: 44px;
  padding: 12px 24px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #ddd;
  background: white;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const TableRow = styled.tr`
  height: 84px;
  &:nth-child(odd) {
    background: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 12px 24px;
  color: #555;
  border-bottom: 1px solid #ddd;
`;

const DataTable = ({ data }) => {
  return (
    <TableContainer>
      <TableWrapper>
        <Table>
          {/* Table Head */}
          <thead>
            <tr>
              <TableHeader>Application</TableHeader>
              <TableHeader>Line Number</TableHeader>
              <TableHeader>Product</TableHeader>
              <TableHeader>Reason For Rejection</TableHeader>
              <TableHeader>Quantity</TableHeader>
              <TableHeader>Time</TableHeader>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data?.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.application}</TableCell>
                <TableCell>{row.lineNumber}</TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.rejectionReason}</TableCell>
                <TableCell>{row.unitsProcessed}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </TableContainer>
  );
};

export default DataTable;
