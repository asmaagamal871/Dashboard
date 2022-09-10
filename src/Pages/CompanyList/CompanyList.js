import styles from "./CompanyList.module.css";
import {DeleteOutline } from '@mui/icons-material';
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function GuideList() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: " Name", width: 130
    // ,
    // renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         <img className="userListImg" src={params.row.avatar} alt="" />
    //         {params.row.name}
    //       </div>
    //     );
    //   },
    
    },

    
    {
      field: "numberOfTrips",
      headerName: "Number Of Trips",
      type: "number",
      width: 150,
    },
    {
      field: "city",
      headerName: "City",
      type: "text",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
    },
    
    {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            
              <div className={styles.conOfButtons}>
                <button className={styles.userListEdit}>Edit</button>
           
              <DeleteOutline
onClick={() => handleDelete(params.row.id)}
className={styles.userListDelete}  />
            </div>
          );
        },
      },
    
  ];
  const rows = [
    {
      id: 1,
      name: "go travell ",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      numberOfTrips: 15,
      email: "GoTravell@gmail.com",
      city: "Alexandria",
    },
    {
      id: 2,
      name: "tour ",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      numberOfTrips: 25,
      email: "tour@gmail.com",
      city: "luxor",
      
    },
    {
      id: 3,
      name: "summer travel",
      avatar: "/Images/Dashboard/ProfilePhoto/profile.jpg",
      numberOfTrips: 2,
      email: "summer@gmail.com",
      city: "Cairo",
      
    },
    {
      id: 4,
      name: " Dreams",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      numberOfTrips: 18,
      email: "Dreams@gmail.com",
      city: "tanta",
      
    },
    {
      id: 5,
      name: " alex travel ",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      numberOfTrips: 12,
      email: "alex@gmail.com",
      city: "Alexandria",
      
    },
    {
      id: 6,
      name: "sun rise",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      numberOfTrips: 4,
      email: "sun@gmail.com",
      city: "Cairo",
      
    },
   
  ];
  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <div className={styles.userList}>
    <div className={styles.userTitleContainer}>
    <h2 className={styles.listTitle}>Companies</h2>
    <button className={styles.userAddButton}>Add company</button>
    
    </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
