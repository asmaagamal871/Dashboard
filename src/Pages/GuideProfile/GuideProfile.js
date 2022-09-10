import styles from "./GuideProfile.module.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  FiberManualRecord,
  Info,
  Money,
  Password,
  Cake,
  Publish,
} from "@mui/icons-material";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import { useState } from "react";
import { LocationCitySharp } from "@mui/icons-material";

import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function GuideProfile() {
  const [personName, setPersonName] = useState([]);
  const [city, setAge] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className={styles.user}>
      <div className={styles.userTitleContainer}>
        <h1 className={styles.userTitle}> profile</h1>
      </div>
      <div className={styles.userContainer}>
        <div className={styles.userShow}>
          <div className={styles.userShowTop}>
            <img
              src="/Images/Dashboard/ProfilePhoto/2.jpg"
              alt=""
              className={styles.userShowImg}
            />
            <div className={styles.userShowTopTitle}>
              <span className={styles.userShowUsername}>
                Adam Ahmed Mohamed
              </span>
              <span className={styles.userShowUserTitle}>Alexandria</span>
            </div>
          </div>
          <div className={styles.userShowBottom}>
            <span className={styles.userShowTitle}>Account Details</span>

            <div className={styles.userShowInfo}>
              <PermIdentity className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>  Adam Ahmed Mohamed</span>
            </div>

            <div className={styles.userShowInfo}>
              <Cake className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>19 - 2 - 1999</span>
            </div>

            <div className={styles.userShowInfo}>
              <Money className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>400 EGP</span>
            </div>

            <span className={styles.userShowTitle}>Contact Details</span>
            <div className={styles.userShowInfo}>
              <PhoneAndroid className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>0123 456 7891</span>
            </div>
            <div className={styles.userShowInfo}>
              <MailOutline className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>
                ahmed@gmail.com
              </span>
            </div>
            <div className={styles.userShowInfo}>
              <Info className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            <div className={styles.userShowInfo}>
              <LocationSearching className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>roushdy</span>
            </div>
            <span className={styles.userShowTitle}>Languages</span>
            <div className={styles.userShowInfo}>
              <FiberManualRecord className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>English</span>
            </div>

            <div className={styles.userShowInfo}>
              <FiberManualRecord className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>Arabic</span>
            </div>
          </div>

          <span className={styles.userShowTitle}>certificates</span>
          <div className={styles.userShowInfo}>
            <div className={styles.cerImages}>
              <img src="/Images/certificate/1.png" />
              <img src="/Images/certificate/2.jpg" />
              <img src="/Images/certificate/3.jpg" />
            </div>
          </div>

          <div className={styles.userShowInfo}>
            <Password className={styles.userShowIcon} />
            <span className={styles.userShowInfoTitle}>
              <a href="#" className={styles.links}>
                change password
              </a>
            </span>
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
                  placeholder="ahmed"
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Birthday</label>
                <input
                  type="date"
                  // placeholder="annabeck99"
                  className={styles.userUpdateInput}
                />
              </div>

              <div className={styles.userUpdateItem}>
                <label>price</label>
                <input
                  type="number"
                  value={400}
                  disabled
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="ahmed@gmail.com"
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
                <textarea
                  rows={4}
                  cols={50}
                  type="text"
                  placeholder="about"
                  className={styles.userUpdateInput}
                />
              </div>

              <div className={styles.userUpdateItem}>
                <label>Address</label>
                <input
                  type="text"
                  placeholder="address"
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Language</label>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      
                    </InputLabel>
                    <NativeSelect
                      defaultValue={"arabic"}
                      inputProps={{
                        name: "language",
                        id: "uncontrolled-native",
                      }}
                    >
                      <option value={"arabic"}>arabic</option>
                      <option value={"english"}>english</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </div>

              <div>
              <laber>City</laber>
              
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      
                    </InputLabel>
                    <NativeSelect
                      defaultValue={30}
                      inputProps={{
                        name: "city",
                        id: "uncontrolled-native",
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
                  src="/Images/Dashboard/ProfilePhoto/2.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className={styles.userUpdateIcon} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className={styles.newUserButton}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
