import styles from "./WidgetLarge.module.css";
import DashButton from "./DashButton";

export default function WidgetLarge() {
  return (
    <div className={styles.widgetLg}>
      <h3 className={styles.widgetLgTitle}>Latest Bookings </h3>
      <table className={styles.widgetLgTable}>
      <tr className={styles.widgetLgTr}>
      <th className={styles.widgetLgTh}>Customer</th>
      <th className={styles.widgetLgTh}>Company</th>
      <th className={styles.widgetLgTh}>From</th>
      <th className={styles.widgetLgTh}>To</th>
      <th className={styles.widgetLgTh}>Amount</th>
      <th className={styles.widgetLgTh}>Status</th>  
      </tr>
      
      <tr className={styles.widgetLgTr}>
      <td className={styles.widgetLgUser}>
      <img src="/Images/Dashboard/ProfilePhoto/2.jpg" alt="Profile Photo" className={styles.widgetLgImg} />
      <span className={styles.widgetLgName}>Ahmed</span>
      </td>
      <td className={styles.widgetLgDate}>Dreams</td>
      <td className={styles.widgetLgDate}>2 Jun 2022</td>
      <td className={styles.widgetLgDate}>2 Jun 2022</td>
          <td className={styles.widgetLgAmount}>200 EGP</td>
          <td className={styles.widgetLgStatus}>
          <button className={styles.lgBut}> Cancel </button>

          </td>
      </tr>
      <tr className={styles.widgetLgTr}>
      <td className={styles.widgetLgUser}>
      <img src="/Images/Dashboard/ProfilePhoto/3.jpg" alt="Profile Photo" className={styles.widgetLgImg} />
      <span className={styles.widgetLgName}>Adam</span>
      </td>
      <td className={styles.widgetLgDate}>TravelGo</td>
      
      <td className={styles.widgetLgDate}>2 Jun 2022</td>
      <td className={styles.widgetLgDate}>2 Jun 2022</td>
          <td className={styles.widgetLgAmount}>500 EGP</td>
          <td className={styles.widgetLgStatus}>
          <button className={styles.lgBut}> Cancel </button>

          </td>
      </tr>
      <tr className={styles.widgetLgTr}>
      <td className={styles.widgetLgUser}>
      <img src="/Images/Dashboard/ProfilePhoto/2.jpg" alt="Profile Photo" className={styles.widgetLgImg} />
      <span className={styles.widgetLgName}>youssef</span>
      </td>
      <td className={styles.widgetLgDate}>Tour</td>
      
      <td className={styles.widgetLgDate}>2 Jun 2022</td>
      <td className={styles.widgetLgDate}>2 Jun 2022</td>
          <td className={styles.widgetLgAmount}>350 EGP</td>
          <td className={styles.widgetLgStatus}>
          <button className={styles.lgBut}> Cancel </button>

          </td>
      </tr>
      <tr className={styles.widgetLgTr}>
      <td className={styles.widgetLgUser}>
      <img src="/Images/Dashboard/ProfilePhoto/3.jpg" alt="Profile Photo" className={styles.widgetLgImg} />
      <span className={styles.widgetLgName}>wael</span>
      </td>
      <td className={styles.widgetLgDate}>Dreams</td>
      
      <td className={styles.widgetLgDate}>2 Jun 2022</td>
      <td className={styles.widgetLgDate}>2 Jun 2022</td>
          <td className={styles.widgetLgAmount}>400 EGP</td>
          <td className={styles.widgetLgStatus}>
          <button className={styles.lgBut}> Cancel </button>
          </td>
      </tr>
      </table>
    </div>
  )
}
