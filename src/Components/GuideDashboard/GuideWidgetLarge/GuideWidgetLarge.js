import styles from "./GuideWidgetLarge.module.css";
import GuideDashButton from "./GuideDashButton";
import {DeleteOutline } from '@mui/icons-material';

export default function GuideWidgetLarge() {
 
  return (
    <div className={styles.widgetLg}>
      <h3 className={styles.widgetLgTitle}>Requests </h3>
      <table className={styles.widgetLgTable}>
        <tr className={styles.widgetLgTr}>
          <th className={styles.widgetLgTh}>Traveller</th>
          <th className={styles.widgetLgTh}>Message</th>
          <th className={styles.widgetLgTh}>From</th>
          <th className={styles.widgetLgTh}>To</th>
          <th className={styles.widgetLgTh}>Duration</th>
          <th className={styles.widgetLgTh}>Status</th>
        </tr>

        <tr className={styles.widgetLgTr}>
          <td className={styles.widgetLgUser}>
            <img
              src="/Images/Dashboard/ProfilePhoto/3.jpg"
              alt="Profile Photo"
              className={styles.widgetLgImg}
            />
            <span className={styles.widgetLgName}>Ahmed</span>
          </td>
          <td className={styles.widgetLgDate}>
            Hello i want to go to alex with my friends
          </td>
          <td className={styles.widgetLgDate}>6 feb 2022</td>
          <td className={styles.widgetLgDate}>8 feb 2022</td>
          <td className={styles.widgetLgDate}>2 Days</td>
          <td className={styles.widgetLgStatus}>
            <div className={styles.fBut}>
              <button className={styles.newUserButtonb}> Accept</button>
              <DeleteOutline className={styles.userListDelete}/>

            </div>
          </td>
        </tr>
        <tr className={styles.widgetLgTr}>
          <td className={styles.widgetLgUser}>
            <img
              src="/Images/Dashboard/ProfilePhoto/profile.jpg"
              alt="Profile Photo"
              className={styles.widgetLgImg}
            />
            <span className={styles.widgetLgName}>Sara</span>
          </td>
          <td className={styles.widgetLgDate}>
            Hello i want to go to alex with my friends
          </td>
          <td className={styles.widgetLgDate}>6 feb 2022</td>
          <td className={styles.widgetLgDate}>8 feb 2022</td>
          <td className={styles.widgetLgDate}>2 Days</td>
          <td className={styles.widgetLgStatus}>
            <div className={styles.fBut}>
              <button className={styles.newUserButtonb}> Accept</button>
              <DeleteOutline className={styles.userListDelete}/>
            </div>
          </td>
        </tr>
        <tr className={styles.widgetLgTr}>
          <td className={styles.widgetLgUser}>
            <img
              src="/Images/Dashboard/ProfilePhoto/2.jpg"
              alt="Profile Photo"
              className={styles.widgetLgImg}
            />
            <span className={styles.widgetLgName}>Mohamed</span>
          </td>
          <td className={styles.widgetLgDate}>
            Hello i want to go to alex with my friends and my family and my friends 
          </td>
          <td className={styles.widgetLgDate}>6 feb 2022</td>
          <td className={styles.widgetLgDate}>8 feb 2022</td>
          <td className={styles.widgetLgDate}>2 Days</td>
          <td className={styles.widgetLgStatus}>
            <div className={styles.fBut}>
              <button className={styles.newUserButtonb}> Accept</button>
              <DeleteOutline className={styles.userListDelete}/>

            </div>
          </td>
        </tr>
        <tr className={styles.widgetLgTr}>
          <td className={styles.widgetLgUser}>
            <img
              src="/Images/Dashboard/ProfilePhoto/4.jpg"
              alt="Profile Photo"
              className={styles.widgetLgImg}
            />
            <span className={styles.widgetLgName}>yasser</span>
          </td>
          <td className={styles.widgetLgDate}>
            Hello i want to go to alex with my friends
          </td>
          <td className={styles.widgetLgDate}>5 feb 2022</td>
          <td className={styles.widgetLgDate}>8 feb 2022</td>
          <td className={styles.widgetLgDate}>3 Days</td>
          <td className={styles.widgetLgStatus}>
            <div className={styles.fBut}>
              <button className={styles.newUserButtonb}> Accept</button>
              <DeleteOutline className={styles.userListDelete}/>

            </div>
          </td>
        </tr>
        <tr className={styles.widgetLgTr}>
          <td className={styles.widgetLgUser}>
            <img
              src="/Images/Dashboard/ProfilePhoto/profile.jpg"
              alt="Profile Photo"
              className={styles.widgetLgImg}
            />
            <span className={styles.widgetLgName}>Nada</span>
          </td>
          <td className={styles.widgetLgDate}>
            Hello i want to go to alex with my friends
          </td>
          <td className={styles.widgetLgDate}>5 feb 2022</td>
          <td className={styles.widgetLgDate}>8 feb 2022</td>
          <td className={styles.widgetLgDate}>3 Days</td>
          <td className={styles.widgetLgStatus}>
            <div className={styles.fBut}>
              <button className={styles.newUserButtonb}> Accept</button>
              <DeleteOutline className={styles.userListDelete}/>

            </div>
          </td>
        </tr>
        <tr className={styles.widgetLgTr}>
          <td className={styles.widgetLgUser}>
            <img
              src="/Images/Dashboard/ProfilePhoto/2.jpg"
              alt="Profile Photo"
              className={styles.widgetLgImg}
            />
            <span className={styles.widgetLgName}>Omar</span>
          </td>
          <td className={styles.widgetLgDate}>
            Hello i want to go to alex with my friends
          </td>
          <td className={styles.widgetLgDate}>2 Jun 2022</td>
          <td className={styles.widgetLgDate}>5 Jun 2022</td>
          <td className={styles.widgetLgDate}>3 Days</td>
          <td className={styles.widgetLgStatus}>
            <div className={styles.fBut}>
              <button className={styles.newUserButtonb}> Accept</button>
              <DeleteOutline className={styles.userListDelete}/>

            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
