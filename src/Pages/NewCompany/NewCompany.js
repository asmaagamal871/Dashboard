import styles from "./NewCompany.module.css";


import TextField from '@mui/material/TextField';


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useState } from "react";
import { LocationCitySharp } from "@mui/icons-material";

export default function NewCompany() {

  const [City, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.newUser}>
      <div className={styles.newUser}>
      <h1 className={styles.newUserTitle}>New Company</h1>
      <form className={styles.newUserForm}>
        <div className={styles.newUserItem}>
          <label>Username</label>
          <input type="text" placeholder="Dreams" />
        </div>
       
        <div className={styles.newUserItem}>
          <label>Email</label>
          <input type="email" placeholder="Dreams@gmail.com" />
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
          <input type="text" placeholder="0123 456 7891" />
        </div>
       <div  className={styles.newUserItem}>
       <label>Type</label>
       <input type="text" value="company" disabled/>
       </div>
       
       <div className={styles.newUserItem}>
       <label>City</label>
       
       <select>
       <option>Alexandria</option>
       <option>Alexandria</option>
       <option>Alexandria</option>
       <option>Alexandria</option>
       <option>Alexandria</option>
       <option>Alexandria</option>
       <option>Alexandria</option>
       </select>
       
      
       
       
       </div>
       
        <button className={styles.newUserButton}>Add</button>
      </form>
    </div>
    </div>
  )
}
