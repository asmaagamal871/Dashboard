
import SideBar from "../Components/SideBar/SideBar";
import TopBar from "../Components/TopBar/TopBar";
import styles from "../App.module.css";
import TripList from "./TripList/TripList";
import NewGuide from "./NewGuide/NewGuide";

import {Route,Switch ,NavLink} from"react-router-dom";
function Dashboard(){

return(
    <div >
    <TopBar/>
    <div className={styles.container}>
    <SideBar/>
    <NavLink to="/dashboard/tripList">trip</NavLink>
    
    
   
    <Route path="/dashboard/tripList">
    <TripList/>
    </Route>
    <Route path="/dashboard/newGuide">
   <NewGuide/>
    </Route>
  
    
    
    </div>
    </div>)


}

export default Dashboard;