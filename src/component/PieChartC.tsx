import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, PieLabelRenderProps } from 'recharts';
import { useAppSelector } from '../redux/store';

interface expense {
  id: string;
  id_: number;
  budget_id: string | null;
  purpose: string;
  date: string;
  amount: number;
}

interface Expenses {
    expenses: expense[]
}


const PieChartC = ({expenses}:Expenses) => {
    const [value, setValue] = useState<number>(100)
    const [MaxRadius, setMaxRadius] = useState<number>(120)
    const selectedData =  expenses
    .filter(e => e.date) // Ensure valid dates
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4) || [];
    console.log(selectedData)


    useEffect(() => {
        if(window.innerWidth <= 1024) {
            setValue(60)
        }
        if(window.innerWidth <= 630) {
            setMaxRadius(100)
        }
    },[window.innerWidth])
    
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }:PieLabelRenderProps) => {
      const validInnerRadius = typeof innerRadius === 'number' ? innerRadius : 0;
      const validOuterRadius = typeof outerRadius === 'number' ? outerRadius : 0;
      const validCy  = typeof cy === 'number' ? cy : 0;
      const validCx  = typeof cx === 'number' ? cx : 0;
      const validPercent  = typeof percent === 'number' ? percent : 0;
      
    
      const radius = validInnerRadius + (validOuterRadius - validInnerRadius) * 0.5;
      const x = validCx + radius * Math.cos(-midAngle * (Math.PI / 180));
      const y = validCy + radius * Math.sin(-midAngle * (Math.PI / 180));
    
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > validCx ? 'start' : 'end'} dominantBaseline="central">
          {`${(validPercent * 100).toFixed(0)}%`}
        </text>
      );
    };

    return (
        <div className='h-full'>
            <ResponsiveContainer height={`${value}%`}>
            <PieChart>
                <Pie
                data={selectedData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                // outerRadius={110}
                maxRadius={MaxRadius}
                fill="#8884d8"
                dataKey="amount"
                >
                {selectedData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} fontSize="0.75rem"/>
                ))}
                </Pie>
            </PieChart>
            </ResponsiveContainer>
            <ul className='text-softText flex flex-wrap gap-2'>
                {selectedData.map((entry, index) => (
                <li className='flex flex-col gap-2 grow' key={index}>
                    <div className='flex items-center gap-2'>
                        <span className={`w-3 h-3 rounded-full`} style={{ backgroundColor: COLORS[index % COLORS.length]}}></span>
                        <span className='lgg:text-sm'>{entry.purpose}</span>
                    </div>
                    <div className='pl-5 lgg:text-xs'>${entry.amount}</div>
                </li>
                ))}
            </ul>
        </div>
      );
}

export default PieChartC;