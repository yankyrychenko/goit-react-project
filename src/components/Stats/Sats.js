import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Rectangle,
  LabelList,
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
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        return;
      }
      setIsMobile(false);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <>
      <ResponsiveContainer width="100%" height="100%" minHeight={422}>
        <BarChart
          barCategoryGap="20%"
          height={422}
          data={data}
          layout={isMobile ? 'vertical' : 'horizontal'}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
         
          {isMobile ? <XAxis type="number" hide /> : <XAxis dataKey="name" axisLine={false} tickLine={false} />}
          {isMobile ? <YAxis type="category" hide dataKey="name" /> : <YAxis type="number" axisLine={false} tick={true} />}
          {/* <XAxis type="number" />
          <YAxis type="category" dataKey="name" /> */}
          
          {!isMobile &&<CartesianGrid vertical={false} strokeDashArray="4" />}
          <Bar
            maxBarSize={38}
            shape={
              <Rectangle radius={isMobile ? [0, 10, 10, 0] : [10, 10, 0, 0]} />
            }
            dataKey="uv"
            fill="#8884d8"
            // shape={<TriangleBar />}
            label={{ position: 'top', fill: '#FF9900' }}
          >
            
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#FF9900" />
            ))}
            {/* <LabelList dataKey="name" position="bottom" /> */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
export default Stats;
