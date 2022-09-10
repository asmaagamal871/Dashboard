
import styles from "./TopBar.module.css";
import {NotificationsNone,Language, Logout
,  Settings } from '@mui/icons-material';
export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarWrapper}>
        <div className={styles.topleft}>
        <span className={styles.logo}>Nomads </span>
        </div>
        <div className={styles.topRight}>
        <Settings/>
        
        <div className={styles.topbarIconContainer}>
        {/* <span className={styles.topIconBadge}>3</span>  */}
        </div>
        <div className={styles.topbarIconContainer}>
        <Language/>
        </div>
        <div className={styles.topbarIconContainer}>
        <Logout/>
        
        </div>
        <img src="/Images/Dashboard/ProfilePhoto/2.jpg" alt="" className={styles.topAvatar}/>
        </div>
      </div>
    </div>
  );
}
