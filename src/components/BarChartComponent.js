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


const BarChartComponent = (filteredData) => {
  return (
    <ChartContainer>
      <Title>Split of Units Processed Today</Title>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={filteredData.data} barCategoryGap="20%" barGap={5}>
          <XAxis dataKey="product" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend align="right" verticalAlign="top" iconSize={10} />
          <Bar dataKey="passed" fill="#002BC5" barSize={35} /> 
          <Bar dataKey="rejected" fill="#53E8C0" barSize={35} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default BarChartComponent;
