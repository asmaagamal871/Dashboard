import styles from "./UserList.module.css";
import {DeleteOutline } from '@mui/icons-material';
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function GuideList() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: " Name", width: 110
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
      field: "age",
      headerName: "Age",
      type: "number",
      width: 50,
    },
    {
      field: "numberOfTrips",
      headerName: "Number Of Trips",
      type: "number",
      width: 120,
    },
    {
      field: "numberOfBookings",
      headerName: "Number Of bookings",
      type: "number",
      width: 150,
    },
    {
      field: "city",
      headerName: "City",
      type: "text",
      width: 90,
    },
    {
      field: "email",
      headerName: "Email",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 190,
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
      name: "Ahmed ",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      numberOfTrips:7,
      age: 35,
      numberOfBookings: 2,
      email: "ahmedd@gmail.com",
      city: "Alexandria",
    },
    {
      id: 2,
      name: " Gamal",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      numberOfTrips:9,
      age: 40,
      numberOfBookings: 5,
      email: "gamal@gmail.com",
      city: "cairo",
      
    },
    {
      id: 3,
      name: "sara",
      avatar: "/Images/Dashboard/ProfilePhoto/profile.jpg",
      numberOfTrips:5,
      age: 30,
      numberOfBookings: 1,
      email: "sara@gmail.com",
      city: "giza",
      
    },
    {
      id: 4,
      name: " toqa",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      numberOfTrips:10,
      age: 19,
      numberOfBookings: 3,
      email: "toqa@gmail.com",
      city: "aswan",
      
    },
    {
      id: 5,
      name: "rowan",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      numberOfTrips:5,
      age: 27,
      numberOfBookings: 12,
      email: "rowan@gmail.com",
      city: "Cairo",
      
    },
    
    {
      id: 6,
      name: " menna",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      numberOfTrips:20,
      age: 23,
      numberOfBookings: 14,
      email: "menna@gmail.com",
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
    <h3 className={styles.listTitle}> Users </h3>
    
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
