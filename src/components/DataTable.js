import styled from "styled-components";

const TableContainer = styled.div`
  background: white;
  border-radius: 16px;
  border: 0.5px solid #CDD5DF;
  width: 100%;
  margin-top: 30px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
`;

const TableHeader = styled.th`
height: 44px;
  padding: 12px 24px;
  text-align: left;
  fint-size: 12px;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #ddd;
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

const mockData = [
  {
    application: "Application 1",
    lineNumber: "Line 1",
    product: "Party Pack",
    reason: "Wrong Coding",
    quantity: 10,
    time: "01/02/2024",
  },
  {
    application: "Application 2",
    lineNumber: "Line 2",
    product: "Tub",
    reason: "Wrong Price",
    quantity: 12,
    time: "01/02/2024",
  },
  {
    application: "Application 3",
    lineNumber: "Line 3",
    product: "Party Pack",
    reason: "Wrong Factory Code",
    quantity: 8,
    time: "01/02/2024",
  },
];

const DataTable = () => {
  return (
    <TableContainer>
      <Table>
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
        <tbody>
          {mockData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.application}</TableCell>
              <TableCell>{row.lineNumber}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.reason}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.time}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
