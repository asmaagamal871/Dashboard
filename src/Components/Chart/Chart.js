import styles from "./Chart.module.css";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function Chart() {


    const data = [
        {
          name: 'Page A',
          ActiveUser: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          ActiveUser: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          ActiveUser: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          ActiveUser: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          ActiveUser: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          ActiveUser: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          ActiveUser: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      

  return (
    <div className={styles.chart}>
    <h3 className={styles.chartTitle}> Sales Analytics  </h3>
    <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
