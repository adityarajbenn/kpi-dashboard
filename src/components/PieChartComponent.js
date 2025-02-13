import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
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
  { name: "Incorrect Price", value: 48 },
  { name: "Missing Coding", value: 52 },
];

const COLORS = ["#53E8C0", "#002BC5"];

const PieChartComponent = () => {
  return (
    <ChartContainer>
      <Title>Reasons for Rejection</Title>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`} // ✅ Labels as percentages
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend align="right" verticalAlign="top" iconSize={10} /> {/* ✅ Legend position fixed */}
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default PieChartComponent;
