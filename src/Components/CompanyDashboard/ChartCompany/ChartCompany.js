import styles from "./ChartCompany.module.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function ChartComapny() {


    const data = [
        {
          name: 'jan',
          trips: 40,
         
        },
        {
          name: 'feb',
          trips: 20,
        
        },
        {
          name: 'mar',
          trips: 30,
        
        },
        {
          name: 'apr',
          trips: 51,
        
        },
        {
          name: 'may',
          trips: 60,
     
        },
        {
          name: 'jun',
          trips: 70,
        
        },
        {
          name: 'jul',
          trips: 90,
         
        },
        {
          name: 'aug',
          trips: 10,
        
        },
        {
          name: 'sep',
          trips: 30,
         
        },
        {
          name: 'oct',
          trips: 40,
         
        },
        {
          name: 'nov',
          trips: 10,
         
        },
        {
          name: 'dec',
          trips: 25,
         
        },
      ];
      

  return (
    <div className={styles.chart}>
    <h3 className={styles.chartTitle}> Company trips analytics   </h3>
    <ResponsiveContainer width="100%" aspect={4 / 1}>
    <LineChart data={data} >
    <XAxis dataKey="name" stroke="#5550bd"/>
    {/* <YAxis /> */}
    <Line type="monotone" dataKey="trips" stroke="#5550bd" />
    {/* <Line type="monotone" dataKey="pv" stroke="#5550bd" />
    <Line type="monotone" dataKey="amt" stroke="#5550bd" /> */}
    <Tooltip/>
    <CartesianGrid className="#e0dfdf" strokeDasharray="5 5"/>
    <Legend/>
    </LineChart>
    </ResponsiveContainer>
    </div>
  )
}
