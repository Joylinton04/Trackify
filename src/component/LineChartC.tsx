import { useContext, useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import { ThemeContext } from '../context/useContext';


const LineChartC = () => {
  const [softTextColor, setSoftTextColor] = useState('');
  const {mode} = useContext(ThemeContext)

  useEffect(() => {
    // Dynamically get the value of the CSS variable --softtext
    const rootStyles = getComputedStyle(document.documentElement);
    setSoftTextColor(() => rootStyles.getPropertyValue('--maintext').trim());
  }, [mode]);

    const data = [
    {
        name: 'Groceries',
        amount: 327,
        budget: 3000,
    },
    {
        name: 'Transportation',
        amount: 210,
        budget: 900,
    },
    {
        name: 'Subscription',
        amount: 401,
        budget: 6900,
    },
    {
        name: 'Vacation',
        amount: 3801,
        budget: 9200,
    },
];
  return (
    <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <XAxis 
            dataKey="name" 
            padding={{ left: 30, right: 30 }} 
            tick={{
              fontSize: 14, 
              fill: softTextColor,
            }}
            />
          <YAxis 
            tick={{
              fontSize: '14px',
              fill: softTextColor,
            }}  
          />
          <Tooltip 
            wrapperStyle={{ 
              width: 'max-content', 
              backgroundColor: 'var(--tooltip)',
              fontSize: '13px',
            }}
            contentStyle={{
              backgroundColor: 'transparent'
            }}
          />
          <Line type="monotone" dataKey="budget" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
  )
}

export default LineChartC;