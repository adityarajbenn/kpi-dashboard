import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import styled from "styled-components";

const ChartContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 16px;
  border: 0.5px solid #CDD5DF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
`;

const data = [
  { name: "Party Pack", Passed: 90, Rejected: 10 },
  { name: "Tub", Passed: 75, Rejected: 25 },
];

const BarChartComponent = () => {
  return (
    <ChartContainer>
      <Title>Split of Units Processed Today</Title>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} barCategoryGap="20%" barGap={5}> {/* ✅ Adjust bar spacing */}
          <XAxis dataKey="name" tick={{ fontSize: 12 }} /> {/* ✅ Smaller font */}
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend align="right" verticalAlign="top" iconSize={10} /> {/* ✅ Legend fixed */}
          <Bar dataKey="Passed" fill="#002BC5" barSize={35} /> {/* ✅ Bar width matched */}
          <Bar dataKey="Rejected" fill="#53E8C0" barSize={35} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default BarChartComponent;
