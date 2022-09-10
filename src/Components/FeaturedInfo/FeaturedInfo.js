import styles from "./FeaturedInfo.module.css";
import {ArrowDownward,ArrowUpward } from '@mui/icons-material';

export default function FeaturedInfo() {
  return (
    <div className={styles.featured} >
      <div className={styles.featuredItem}>
      <span className={styles.featuredTitle}> Travellers </span>
      <div className={styles.featuredMoneyContainer}>
      <span className={styles.featuredMoney} > 504 </span>
      {/* <span className={styles.featuredMoneyPate} > -11.4 <ArrowDownward className={`${styles.featuredIcon} ${styles.negative}`}/> </span> */}
      </div>
      {/* <span className={styles.featuredSub}>Compared to last month</span> */}
      <button className={styles.featButs}>See All</button>
      </div>
      
      
      <div className={styles.featuredItem}>
      <span className={styles.featuredTitle}> Guides </span>
      <div className={styles.featuredMoneyContainer}>
      <span className={styles.featuredMoney} > 70 </span>
      {/* <span className={styles.featuredMoneyPate} > -19.4 <ArrowDownward className={`${styles.featuredIcon} ${styles.negative}`}/> </span> */}
      </div>
      {/* <span className={styles.featuredSub}>Compared to last month</span> */}
      <button className={styles.featButs}>See All</button>
      
      </div>
      
      
      <div className={styles.featuredItem}>
      <span className={styles.featuredTitle}> Companies </span>
      <div className={styles.featuredMoneyContainer}>
      <span className={styles.featuredMoney} >50 </span>
      {/* <span className={styles.featuredMoneyPate} > +11.4 <ArrowUpward className={styles.featuredIcon} /> </span> */}
      </div>
      {/* <span className={styles.featuredSub}>Compared to last month</span> */}
      <button className={styles.featButs}>See All</button>
      
      
      </div>
    </div>
  )
}



const data = [
  {
    name: 'company 1 ',
    profit: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'company 2',
    profit: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'company 3',
    profit: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'company 4',
    profit: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'company 5',
    profit: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'company 6',
    profit: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'company 7',
    profit: 3490,
    pv: 4300,
    amt: 2100,
  },
];
