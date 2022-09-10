import styles from "./DashButton.module.css";
const DashButton=(props)=>{
    return (
        <div>
         <button>{props.data}</button> 
        </div>
      )
}
export default DashButton;