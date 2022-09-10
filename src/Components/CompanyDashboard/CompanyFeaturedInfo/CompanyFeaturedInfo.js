import styles from "./CompanyFeaturedInfo.module.css";
import {ArrowDownward,ArrowUpward } from '@mui/icons-material';

export default function CompanyFeaturedInfo() {
  return (
    <div className={styles.featured} >
    
      <div className={styles.featuredItem}>
      <span className={styles.featuredTitle}>  Total Bookings </span>
      <div className={styles.featuredMoneyContainer}>
      <span className={styles.featuredMoney} > 500 </span>
      
      </div>
      <span className={styles.featuredSub}>since joining our family</span>
      
      </div>
      
      <div className={styles.featuredItem}>
      <span className={styles.featuredTitle}>   Bookings </span>
      <div className={styles.featuredMoneyContainer}>
      <span className={styles.featuredMoney} > 60 </span>
      
      </div>
      <span className={styles.featuredSub}>For This Month</span>
      
      </div>
      
      
      <div className={styles.featuredItem}>
      <span className={styles.featuredTitle}> Total Trips </span>
      <div className={styles.featuredMoneyContainer}>
      <span className={styles.featuredMoney} > 40 </span>
      </div>
      <span className={styles.featuredSub}>since joining our family</span>
      <span className={styles.featuredSub}></span>
      </div>
      
      <div className={styles.featuredItem}>
      <span className={styles.featuredTitle}>  Trips </span>
      <div className={styles.featuredMoneyContainer}>
      <span className={styles.featuredMoney} > 10 </span>
      </div>
      <span className={styles.featuredSub}>For This Month</span>
      <span className={styles.featuredSub}></span>
      </div>
      
      
      <div className={styles.featuredItem}>
      <span className={styles.featuredTitle}> Total Income </span>
      <div className={styles.featuredMoneyContainer}>
      <span className={styles.featuredMoney} > 10000.00 </span>
      </div>
      <span className={styles.featuredSub}>since joining our family</span>
      </div>
      
      <div className={styles.featuredItem}>
      <span className={styles.featuredTitle}>  Income </span>
      <div className={styles.featuredMoneyContainer}>
      <span className={styles.featuredMoney} > 1000.00 </span>
      </div>
      <span className={styles.featuredSub}>For This Month</span>
      </div>
    </div>
  )
}
