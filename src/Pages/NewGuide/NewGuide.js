import styles from "./NewGuide.module.css";



export default function NewGuide() {





  return (
    <div className={styles.newUser}>
      <div className={styles.newUser}>
      <h1 className={styles.newUserTitle}>New Guide</h1>
      <form className={styles.newUserForm}>
        <div className={styles.newUserItem}>
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
       
        <div className={styles.newUserItem}>
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className={styles.newUserItem}>
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className={styles.newUserItem}>
          <label>Confirm Password</label>
          <input type="Confirm password" placeholder="password" />
        </div>
        <div className={styles.newUserItem}>
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div  className={styles.newUserItem}>
       <label>Type</label>
       <input type="text" value="guide" disabled/>
       </div>
        <button className={styles.newUserButton}>Create</button>
      </form>
    </div>
    </div>
  )
}
