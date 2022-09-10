import styles from "./GuideList.module.css";
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
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
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
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 220,
    },
    
    {
        field: "action",
        headerName: "Action",
        width: 180,
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
      name: " Gamal Saad",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      age: 30,
      numberOfBookings: 9,
      email: "gamalsaad@gmail.com",
      city: "Alexandria",
    },
    {
      id: 2,
      name: "Ahmed Gamal",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      age: 27,
      numberOfBookings: 8,
      email: "ahmedgamal@gmail.com",
      city: "luxor",
      
    },
    {
      id: 3,
      name: "youssef moahmmed",
      avatar: "/Images/Dashboard/ProfilePhoto/profile.jpg",
      age: 25,
      numberOfBookings: 6,
      email: "youssef@gmail.com",
      city: "Cairo",
      
    },
    {
      id: 4,
      name: "sara mahoumod",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      age: 22,
      numberOfBookings: 17,
      email: "sara@gmail.com",
      city: "Alexandria",
      
    },
    {
      id: 5,
      name: "menna Gamal",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      age: 35,
      numberOfBookings: 10,
      email: "mena@gmail.com",
      city: "Cairo",
      
    },
    {
      id: 6,
      name: "Agmed Gamal",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      age: 35,
      numberOfBookings: 5,
      email: "ahmedgamal@gmail.com",
      city: "Cairo",
      
    },
    {
      id: 7,
      name: "Agmed Gamal",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      age: 35,
      numberOfBookings: 7,
      email: "ahmedgamal@gmail.com",
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
    <h2 className={styles.listTitle}>Guides</h2>
    <button className={styles.userAddButton}>Add new Guide</button>
    
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
