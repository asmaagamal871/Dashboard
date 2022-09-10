import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";
import {LineStyle,AddBusiness
,  Apartment,Timeline,PersonAdd,SwipeRight,Add
,Work,ReportGmailerrorred,ChatBubbleOutline,Feedback,TrendingUp,MailOutline,Person,ConnectingAirports,Paid,BarChart} from '@mui/icons-material';
export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
      
      
      
        {/* <div className={styles.sidebarMenu}>
        
        
          <h3 className={styles.sidebarTitle}>Dashboard</h3>
          <ul className={styles.sidebarList}>
          
           <NavLink to="/" exact>
          <li className={styles.sidebarListItem }>
            
            <LineStyle className={styles.sidebarIcon}/>
            Home
            
            </li>
          
          </NavLink>
          
            
          
          
          
          
          </ul>
        </div>
        
        
        <div className={styles.sidebarMenu}>
        
        
          <h3 className={styles.sidebarTitle}>Quick Menu</h3>
           <ul className={styles.sidebarList}>
          
          
          <NavLink to="/Admin/ViewGuideList/1" exact >
          <li className={styles.sidebarListItem}>
        
          <Person className={styles.sidebarIcon} />
          Guides
          
          </li>
          
          </NavLink>
          
          <NavLink to="/Admin/ViewTripList/1" exact>
          <li className={styles.sidebarListItem}>
            
            
            
            <ConnectingAirports className={styles.sidebarIcon}/>
            Trips
            </li>
          
          </NavLink>
          
          
       
            
            
        
            <NavLink to="/Admin/ViewCompanyList/1" exact>
            <li className={`${styles.sidebarListItem }`}>

            
                 <Apartment className={styles.sidebarIcon}/>
                  Companies
                  </li>
            
            </NavLink>
            
            
            <NavLink to="/Admin/ViewUserList/1" exact>
            <li className={styles.sidebarListItem}>
            

            <Person className={styles.sidebarIcon}/>
            Travellers
            </li>
            
            </NavLink>
           
            
           
          </ul>
        </div>
        
        
        <div className={styles.sidebarMenu}>
        
        
          <h3 className={styles.sidebarTitle}>Add Users</h3>
          <ul className={styles.sidebarList}>
          
          
          <NavLink to="/Admin/AddNewGuide/1" exact>
          <li className={styles.sidebarListItem}>
          
            
          <PersonAdd
className={styles.sidebarIcon}/>
          Add Guide
          
          </li>
          </NavLink>
         
            <NavLink to="/Admin/AddNewCompany/1">
            <li className={styles.sidebarListItem}>
            <AddBusiness
 className={styles.sidebarIcon}/>
            Add Company
            </li>
            
            </NavLink>
            
           
            
            <li className={styles.sidebarListItem}>
            <SwipeRight

 className={styles.sidebarIcon}/>
            Accept Trip
            </li>
            
         
         
         
           
          </ul> 
        </div> 
         */}
        
        
        
        
        {/* Company */}
        
        {/* <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Dashboard</h3>
          <ul className={styles.sidebarList}>
         

            
            <NavLink to="/" activeClassName={styles.sidebarListItem} exact>
            <li className={styles.sidebarListItem}>
            <LineStyle className={styles.sidebarIcon}/>
            Home
            
             </li>
            </NavLink>
            <NavLink activeClassName={styles.sidebarListItem.active} to="/company/Profile/2" exact>
            <li className={styles.sidebarListItem}>      
            
            <Person className={styles.sidebarIcon}/>
            Profile
            
             </li>
        
            </NavLink>
          
             
             
             
             
             

          </ul>
        </div> 
        
        
         <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Quick Menu</h3>
          <ul className={styles.sidebarList}>
          
         <NavLink activeClassName={styles.sidebarListItem} to="/company/TripList/2" exact>
         <li className={styles.sidebarListItem}>

<ConnectingAirports className={styles.sidebarIcon}/>
Trips

</li>
         
         </NavLink>
        
       
    <NavLink activeClassName={styles.sidebarListItem} to="/company/AddTrip/2" exact>
            <li className={styles.sidebarListItem}>
            <Add className={styles.sidebarIcon}/>
            Add Trip
            </li>
            </NavLink>
            
          </ul>
        </div> 
        
        
        
         
         */}
         
         
        {/* guide */}
        
        
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Dashboard</h3>
          <ul className={styles.sidebarList}>
          <NavLink to="/">
          <li className={styles.sidebarListItem}>
            
            <LineStyle className={styles.sidebarIcon}/>
            Home
            </li>
          </NavLink>
         
            
            
  
          </ul>
        </div>
        
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Quick Menu</h3>
          <ul className={styles.sidebarList}>
          
         <NavLink to="/Guide/profile/5">
         
         <li className={styles.sidebarListItem}>
          
            
          <Person className={styles.sidebarIcon}/>
          Profile
          
           </li>
         </NavLink>
         
         
         <NavLink to="/Guide/BookingList/5">
             
             <li className={styles.sidebarListItem}>
            
            <ConnectingAirports className={styles.sidebarIcon}/>
            Bookings
            
            </li>
            </NavLink>
          </ul>
        </div>
        
         
         
      </div>
    </div>
  );
}
