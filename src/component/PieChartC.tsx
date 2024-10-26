import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, PieLabelRenderProps } from 'recharts';


const PieChartC = () => {
    const [value, setValue] = useState<number>(100)

    useEffect(() => {
        if(window.innerWidth <= 1024) {
            setValue(60)
        }
    },[])

    const data = [
        { name: 'Transportation', value: 430 },
        { name: 'Vacation', value: 1000 },
        { name: 'Stream', value: 550 },
        { name: 'Groceries', value: 300 },
    ];
    
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
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                // outerRadius={110}
                maxRadius={120}
                fill="#8884d8"
                dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} fontSize="0.75rem"/>
                ))}
                </Pie>
            </PieChart>
            </ResponsiveContainer>
            <ul className='text-softText flex flex-wrap gap-2'>
                {data.map((entry, index) => (
                <li className='flex flex-col gap-2 grow' key={index}>
                    <div className='flex items-center gap-2'>
                        <span className={`w-3 h-3 rounded-full`} style={{ backgroundColor: COLORS[index % COLORS.length]}}></span>
                        <span className='lgg:text-sm'>{entry.name}</span>
                    </div>
                    <div className='pl-5 lgg:text-xs'>${entry.value}</div>
                </li>
                ))}
            </ul>
        </div>
      );
}

export default PieChartC;