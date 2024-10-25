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
        Amount: 327,
        Budget: 3000,
    },
    {
        name: 'Transportation',
        Amount: 210,
        Budget: 900,
    },
    {
        name: 'Subscription',
        Amount: 401,
        Budget: 6900,
    },
    {
        name: 'Vacation',
        Amount: 3801,
        Budget: 9200,
    },
];
  return (
    <ResponsiveContainer width="100%" height={300}>
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
          <Line type="monotone" dataKey="Budget" stroke="#8884d8" activeDot={{ r: 8}}/>
          <Line type="monotone" dataKey="Amount" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
  )
}

export default LineChartC;