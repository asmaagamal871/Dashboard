import styles from "./CompanyProfile.module.css";
import {CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Info,
    Password,
    Publish, } from '@mui/icons-material';
    
    
    import Box from '@mui/material/Box';
    import InputLabel from '@mui/material/InputLabel';
    import FormControl from '@mui/material/FormControl';
    import NativeSelect from '@mui/material/NativeSelect';

import { useState } from "react";
import { LocationCitySharp } from "@mui/icons-material";

export default function CompanyProfile() {


  const [city, setAge] = useState('');

 



  return (
    <div className={styles.user}>
        <div className={styles.userTitleContainer}>
        <h1 className={styles.userTitle}> profile</h1>
        
        
      </div>
      <div className={styles.userContainer}>
        <div className={styles.userShow}>
          <div className={styles.userShowTop}>
            <img
              src="/Images/Dashboard/company/c2.jpg" 
              alt=""
              className={styles.userShowImg}
            />
            <div className={styles.userShowTopTitle}>
              <span className={styles.userShowUsername}>Dreams</span>
              <span className={styles.userShowUserTitle}>Alexandria</span>
            </div>
          </div>
          <div className={styles.userShowBottom}>
            <span className={styles.userShowTitle}>Account Details</span>
            <div className={styles.userShowInfo}>
              <PermIdentity className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>Dreams Company</span>
            </div>
           
            <span className={styles.userShowTitle}>Contact Details</span>
            <div className={styles.userShowInfo}>
              <PhoneAndroid className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>0123 456 7891</span>
            </div>
            <div className={styles.userShowInfo}>
              <MailOutline className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>dreams@gmail.com</span>
            </div>
            <div className={styles.userShowInfo}>
              <Info className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}> our company is the first in the middle east</span>
            </div>
            <div className={styles.userShowInfo}>
              <LocationSearching className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}> sedi Gabir </span>
            </div>
            <div className={styles.userShowInfo}>
              <Password className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}><a href="#" className={styles.links} >change password</a></span>
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
                  placeholder="Dreams"
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="dreams@gmail.com"
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="0123 456 7891"
                  className={styles.userUpdateInput}
                />
              </div>
              
              <div className={styles.userUpdateItem}>
                <label>About </label>
                <textarea rows={4} cols={50}
                  type="text"
                  placeholder="....."
                  className={styles.userUpdateInput}
                />
              </div>
              
              <div className={styles.userUpdateItem}>
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Sidi Gabir"
                  className={styles.userUpdateInput}
                />
              </div>
              
              <div>
              
              
              <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" >
           City 
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'city',
            id: 'uncontrolled-native',
          }}
        >
          <option value={"alexandria"}>Alexandria</option>
          <option value={"cairo"}>Cairo</option>
          <option value={"tanta"}>Tanta</option>
          <option value={"cairo"}>Cairo</option>
          <option value={"tanta"}>Tanta</option>
          <option value={"cairo"}>Cairo</option>
          <option value={"tanta"}>Tanta</option>
          <option value={"cairo"}>Cairo</option>
          <option value={"tanta"}>Tanta</option>
          <option value={"cairo"}>Cairo</option>
          <option value={"tanta"}>Tanta</option>
        </NativeSelect>
      </FormControl>
    </Box>
       
              
              </div>
              
            </div>
            <div className={styles.userUpdateRight}>
              <div className={styles.userUpdateUpload}>
                <img
                  className={styles.userUpdateImg}
                  src="/Images/Dashboard/company/c2.jpg" 

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
