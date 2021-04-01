import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
import { getPeriodData } from '../../redux/selectors/periodDataSelectors';

const Stats = ({ category }) => {
  const getDataForDiagram = (category, periodData) => {
    const categoryData = periodData?.incomes?.incomesData[category]
      ? periodData.incomes.incomesData[category]
      : periodData?.expenses?.incomesData[category];
    const categoryDataKeys = Object.keys(categoryData).slice(1);
    const formatedCategoryData = categoryDataKeys.map(category => ({
      name: category,
      data: categoryData[category],
    }));
    return formatedCategoryData.sort((a,b)=>b.data-a.data);
  };

  const [isMobile, setIsMobile] = useState(false);
  const periodData = useSelector(getPeriodData);
  const diagramData = getDataForDiagram(category='Транспорт', periodData);
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
          data={diagramData}
          layout={isMobile ? 'vertical' : 'horizontal'}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {isMobile ? (
            <XAxis type="number" hide />
          ) : (
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
          )}
          {isMobile ? (
            <YAxis type="category" hide dataKey="name" />
          ) : (
            <YAxis type="number" axisLine={false} tick={true} />
          )}
          {/* <XAxis type="number" />
          <YAxis type="category" dataKey="name" /> */}

          {!isMobile && <CartesianGrid vertical={false} strokeDashArray="4" />}
          <Bar
            maxBarSize={38}
            shape={
              <Rectangle radius={isMobile ? [0, 10, 10, 0] : [10, 10, 0, 0]} />
            }
            dataKey="data"
            fill="#8884d8"
            // shape={<TriangleBar />}
            label={{ position: 'top', fill: '#FF9900' }}
          >
            {diagramData.map((entry, index) => (
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
