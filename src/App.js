import SideBar from "./Components/SideBar/SideBar";
import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import styles from "./App.module.css";
import GuideList from "./Pages/GuideList/GuideList";
import CompanyList from "./Pages/CompanyList/CompanyList";
import User from "./Pages/User/User";
import NewGuide from "./Pages/NewGuide/NewGuide";
import ProductList from "./Pages/ProductList/ProductList";
import NewCompany from "./Pages/NewCompany/NewCompany";
import UserList from "./Pages/UserList/UserList";
import TripList from "./Pages/TripList/TripList";
import HomeCompany from "./Pages/HomeCompany/HomeCompany";
import CompanyTripList from "./Pages/CompanyTripList/CompanyTripList";
import CompanyProfile from "./Pages/CompanyProfile/CompanyProfile";
import CompanyAddTrip from "./Pages/CompanyAddTrip/CompanyAddTrip";
import CompanyEditTrip from "./Pages/CompanyEditTrip/CompanyEditTrip";
import GuideHome from "./Pages/GuideHome/GuideHome";
import GuideBookingList from "./Pages/GuideBookingList/GuideBookingList";
import GuideProfile from "./Pages/GuideProfile/GuideProfile";
import Dashboard from "./Pages/Dashboard";
import {Route , Switch} from "react-router-dom"

function App() {
  return (

    <div >
    <TopBar/>
    <div className={styles.container}>
    <SideBar/>
    
    <Switch>
    <Route path="/dashboard" exact>
    <Dashboard/>
    </Route>
    {/*company */}
   {/* <Route path="/" exact>
    <HomeCompany/>
    </Route>
     */}
    <Route path="/company/AddTrip/:CompanyId" exact>
    <CompanyAddTrip/>
    </Route>
    
    <Route path="/company/EditTrip/:tripId" exact>
    <CompanyEditTrip/>
    </Route>
    
    <Route path="/company/TripList/:companyId" exact>
    <CompanyTripList/> 
    </Route>
    
    <Route path="/company/Profile/:companyId" exact>
    <CompanyProfile/> 
   </Route>    
   
   
   
   {/* guide */}
 <Route path="/" exact
>
<GuideHome/>
</Route>    
<Route path="/Guide/BookingList/:GuideId">
<GuideBookingList/>
</Route>
<Route path="/Guide/profile/:GuideId">
<GuideProfile/>
</Route> 

{/* company */}
 {/* <Route path="/" exact>
<Home/>
</Route>  */}

<Route path="/Admin/ViewGuideList/:AdminId" exact>
<GuideList/> 

</Route>


<Route path="/Admin/ViewCompanyList/:AdminId" exact>
<CompanyList/>

</Route>

<Route path="/Admin/ViewUserList/:AdminId" exact>
<UserList/>
</Route>

<Route path="/Admin/ViewTripList/:AdminId" exact>
<TripList/>
 </Route>
 
 <Route path="/Admin/AddNewGuide/:AdminId" exact>
 <NewGuide/>
 </Route>
 
 <Route path="/Admin/AddNewCompany/:AdminId" exact>
 <NewCompany/>
 </Route>
 
 
    </Switch>
    
    {/* <Home/> */}
    {/* <GuideList/> */}
    {/* <CompanyList/> */}
    {/* <UserList/> */}
    {/* <TripList/> */}
  
    {/* <NewGuide/> */}
    {/* <NewCompany/> */}
    {/* <ProductList/> */}
    
    
    
    
    {/* <CompanyTripList/> */}
    {/* <CompanyProfile/>     */}
    {/* <HomeCompany/> */}
    {/* <CompanyAddTrip/> */}
    {/* <CompanyEditTrip/> */}
    
    
    
    {/* <GuideHome/> */}
    {/* <GuideBookingList/> */}
    {/* <GuideProfile/> */}
    
    
    
    </div>
    </div>
    
     
  );
}

export default App;
