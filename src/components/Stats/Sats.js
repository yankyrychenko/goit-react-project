import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
const data = [
  {
    name: 'Свинина',
    uv: 4000,
  },
  {
    name: 'Говядина',
    uv: 3000,
  },
  {
    name: 'Курятина',
    uv: 2000,

  },
  {
    name: 'Шоколад',
    uv: 2780,
  },
  {
    name: 'Page E',
    uv: 1890,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Свинина',
    uv: 4000,
  },
];
const Stats = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%" minHeight={422}>
        <BarChart
          height={422}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          //   layout="vertical"
        >
          {/* <XAxis type="number" />
          <YAxis type="category" dataKey="name" /> */}
          <XAxis dataKey="name" />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            // shape={<TriangleBar />}
            label={{ position: 'top' }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#FF9900" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
export default Stats;
