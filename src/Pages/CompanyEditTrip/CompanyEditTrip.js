import styles from "./CompanyEditTrip.module.css";

import { FormControlLabel,FormGroup } from "@mui/icons-material";

import Checkbox from '@mui/material/Checkbox';

import {useState} from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
  display: 'none',
});


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CompanyEditTrip() {


  const [city, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };



  let formIsValid = false;
  function submitFormHandler(event) {
      event.preventDefault();
  }



  return (
    <div className={styles.newUser}>
      <div className={styles.newUser}>
      <h1 className={styles.newUserTitle}>Edit Trip</h1>
      <form className={styles.newUserForm}  onSubmit={submitFormHandler} >
        <div className={styles.newUserItem}>
          <label>TItle</label>
          <input type="text" placeholder="john" />
        </div>
       
        <div className={styles.newUserItem}>
          <label>Description</label>
          <textarea  name="description" required/>
        </div>
        
        <div className={styles.newUserItem}>
          <label>GuideLines</label>
          <textarea  name="GuideLines" required/>
        </div>
        
        
        <div className={styles.newUserItem}>
          <label>Duration</label>
          <input type="text" placeholder="Duration" name="Duration" />
        </div>
        
        
       
        
        
        
        <div className={styles.newUserItem}>
          <label>Price</label>
          <input type="number" placeholder="Price" name="price" />
        </div>
        
        
        <div className={styles.newUserItem}>
          <label>number of seats</label>
          <input type="number" placeholder="number of seats" name="numberOfseats" min="0"/>
        </div>
        
        
        <div className={styles.newUserItem}>
        
        <label>departure place</label>
        
        
        
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">City</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={city}
        label="City"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Alexandria"}>Alexandria</MenuItem>
        <MenuItem value={"Alexandria"}>Alexandria</MenuItem>
        <MenuItem value={"Alexandria"}>Alexandria</MenuItem>
        <MenuItem value={"Alexandria"}>Alexandria</MenuItem>
        <MenuItem value={"Alexandria"}>Alexandria</MenuItem>
        <MenuItem value={"Alexandria"}>Alexandria</MenuItem>
      </Select>
    </FormControl>
       
       
       
        </div>
        <div className={styles.newUserItem}>
        
        <label>Distenation place</label>
        
        
        
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">City</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={city}
        label="City"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Alexandria"}>Alexandria</MenuItem>
        <MenuItem value={"Alexandria"}>Alexandria</MenuItem>
        <MenuItem value={"Alexandria"}>Alexandria</MenuItem>
        <MenuItem value={"Alexandria"}>Alexandria</MenuItem>
        <MenuItem value={"Alexandria"}>Alexandria</MenuItem>
        <MenuItem value={"Alexandria"}>Alexandria</MenuItem>
      </Select>
    </FormControl>
       
       
       
        </div>
        
      
        <div className={styles.newUserItem}>
          <label>From</label>
          <input type="date"  />
        </div>
        
        <div className={styles.newUserItem}>
          <label>To</label>
          <input type="date"  />
        </div>
        
        <div className={styles.newUserItem}>
          <label>Cover of trip</label>
          
          <div className={styles.cImg}>
        <img src="/Images/tripimages/form2.jpg"></img>
          
        <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span" style={{ background: '#3C9DE2' }}>
          Upload
        </Button>
        </label>
        </Stack>
        
        </div>
        </div>
        
        <div className={styles.newUserItemImages}>
        <label className={styles.labels}>Images of trip</label>
        <div className={styles.imagess}>
        
        <img src="/Images/tripimages/Alexandria.jpg"></img>
        <img src="/Images/tripimages/form2.jpg"></img>
        <img src="/Images/tripimages/form3.jpg"></img>
        <img src="/Images/tripimages/form2.jpg"></img>
        <img src="/Images/tripimages/form3.jpg"></img>
        
        
        <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" style={{ background: '#3C9DE2' }} />
        <Button variant="contained" component="span">
          Upload
        </Button>
        </label>
        </Stack>
        </div>
        
         
        </div>
        
        <div className={styles.checkFlex}>
        <Checkbox {...label} defaultChecked />
        <label>I agree to <a href="#">terms and conditions</a></label>
        
        </div>
        
        
        
        
       <div className={styles.disFlexx} >
       
       
       
       
      
        
        <div>
        
        <button className={styles.newUserButton}  type="submit" disabled={!formIsValid} >Create</button>
        <button className={styles.newUserButton}>Cancel</button>
        </div>
        
        </div>
       
        
        
      </form>
    </div>
    </div>
  )
}
