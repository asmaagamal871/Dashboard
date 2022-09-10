import styles from "./GuideFeaturedInfo.module.css";
import {ArrowDownward,ArrowUpward } from '@mui/icons-material';

export default function GuideFeaturedInfo() {
  return (
    <div className={styles.featured} >
    
      <div className={styles.featuredItem}>
      <span className={styles.featuredTitle}>  Total requests </span>
      <div className={styles.featuredMoneyContainer}>
      <span className={styles.featuredMoney} > 50 </span>
      
      </div>
      <span className={styles.featuredSub}>since joining our family</span>
      
      </div>
      
      <div className={styles.featuredItem}>
      <span className={styles.featuredTitle}>   accepted requests </span>
      <div className={styles.featuredMoneyContainer}>
      <span className={styles.featuredMoney} > 30 </span>
      
      </div>
      <span className={styles.featuredSub}>since joining our family</span>
      
      </div>
      
      
      <div className={styles.featuredItem}>
      <span className={styles.featuredTitle}> Declined requests </span>
      <div className={styles.featuredMoneyContainer}>
      <span className={styles.featuredMoney} > 20 </span>
      </div>
      <span className={styles.featuredSub}>since joining our family</span>
      <span className={styles.featuredSub}></span>
      </div>
     
    </div>
  )
}
