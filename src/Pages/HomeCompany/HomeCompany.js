import ChartComapny from "../../Components/CompanyDashboard/ChartCompany/ChartCompany";
import styles from "./HomeCompany.module.css";
import CompanyFeaturedInfo from "../../Components/CompanyDashboard/CompanyFeaturedInfo/CompanyFeaturedInfo";
import CompanyTripList from "../CompanyTripList/CompanyTripList";
import CompanyButtons from "../../Components/CompanyDashboard/CompanyButtons/CompanyButtons";
import {NavLink} from "react-router-dom";
export default function HomeCompany() {
  return (
    <div className={styles.home}>
    <NavLink to="/company/AddTrip/2" exact>
    <button className={styles.userListEdit}> Add Trip </button>
    </NavLink>
   
     <div className={styles.f}>
    <CompanyFeaturedInfo/>
    </div>
      <ChartComapny/>
      
    </div>
  )
}
