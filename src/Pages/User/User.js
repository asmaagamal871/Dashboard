import styles from "./User.module.css";
import {CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish, } from '@mui/icons-material';

export default function user() {
  return (
    <div className={styles.user}>
        <div className={styles.userTitleContainer}>
        <h1 className={styles.userTitle}>Edit User</h1>
        
          <button className={styles.userAddButton}>Create</button>
        
      </div>
      <div className={styles.userContainer}>
        <div className={styles.userShow}>
          <div className={styles.userShowTop}>
            <img
              src="/Images/Dashboard/ProfilePhoto/profile.jpg" 
              alt=""
              className={styles.userShowImg}
            />
            <div className={styles.userShowTopTitle}>
              <span className={styles.userShowUsername}>Anna Becker</span>
              <span className={styles.userShowUserTitle}>Software Engineer</span>
            </div>
          </div>
          <div className={styles.userShowBottom}>
            <span className={styles.userShowTitle}>Account Details</span>
            <div className={styles.userShowInfo}>
              <PermIdentity className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>annabeck99</span>
            </div>
            <div className={styles.userShowInfo}>
              <CalendarToday className="userShowIcon" />
              <span className={styles.userShowInfoTitle}>10.12.1999</span>
            </div>
            <span className={styles.userShowTitle}>Contact Details</span>
            <div className={styles.userShowInfo}>
              <PhoneAndroid className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>+1 123 456 67</span>
            </div>
            <div className={styles.userShowInfo}>
              <MailOutline className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>annabeck99@gmail.com</span>
            </div>
            <div className={styles.userShowInfo}>
              <LocationSearching className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>New York | USA</span>
            </div>
          </div>
        </div>
        <div className={styles.userUpdate}>
          <span className={styles.userUpdateTitle}>Edit</span>
          <form className={styles.userUpdateForm}>
            <div className={styles.userUpdateLeft}>
              <div className={styles.userUpdateItem}>
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className={styles.userUpdateInput}
                />
              </div>
            </div>
            <div className={styles.userUpdateRight}>
              <div className={styles.userUpdateUpload}>
                <img
                  className={styles.userUpdateImg}
                  src="/Images/Dashboard/ProfilePhoto/profile.jpg" 
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className={styles.userUpdateIcon} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className={styles.userUpdateButton}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
