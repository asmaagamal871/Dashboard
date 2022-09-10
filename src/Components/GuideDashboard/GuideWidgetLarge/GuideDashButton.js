import styles from "./GuideDashButton.module.css";
const GuideDashButton=(props)=>{
    return (
        <div > 
         <button className={styles.newUserButton}>{props.data}</button> 
        </div>
      )
}
export default GuideDashButton;