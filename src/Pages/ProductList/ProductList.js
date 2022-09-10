import styles from "./ProductList.module.css"
import {DeleteOutline } from '@mui/icons-material';
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function ProductList() {


    
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
          field: "numberOfTrips",
          headerName: "Number Of Trips",
          type: "number",
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
                    <button className={styles.userListEdit}>Show</button>
               
                  <DeleteOutline 
    onClick={() => handleDelete(params.row.id)}
    className={styles.userListDelete}
    />
                </div>
              );
            },
          },
        
      ];
      const rows = [
        {
          id: 1,
          name: "Agmed Gamal",
          avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
          age: 35,
          numberOfTrips: 12,
          email: "ahmedgamal@gmail.com",
        },
        {
          id: 2,
          name: "Agmed Gamal",
          avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
          age: 35,
          numberOfTrips: 12,
          email: "ahmedgamal@gmail.com",
        },
        {
          id: 3,
          name: "Agmed Gamal",
          avatar: "/Images/Dashboard/ProfilePhoto/profile.jpg",
          age: 35,
          numberOfTrips: 12,
          email: "ahmedgamal@gmail.com",
        },
        {
          id: 4,
          name: "Agmed Gamal",
          avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
          age: 35,
          numberOfTrips: 12,
          email: "ahmedgamal@gmail.com",
        },
        {
          id: 5,
          name: "Agmed Gamal",
          avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
          age: 35,
          numberOfTrips: 12,
          email: "ahmedgamal@gmail.com",
        },
        {
          id: 6,
          name: "Agmed Gamal",
          avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
          age: 35,
          numberOfTrips: 12,
          email: "ahmedgamal@gmail.com",
        },
        {
          id: 7,
          name: "Agmed Gamal",
          avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
          age: 35,
          numberOfTrips: 12,
          email: "ahmedgamal@gmail.com",
        },
        {
          id: 8,
          name: "Agmed Gamal",
          avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
          age: 35,
          numberOfTrips: 12,
          email: "ahmedgamal@gmail.com",
        },
        {
          id: 9,
          name: "Agmed Gamal",
          avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
          age: 35,
          numberOfTrips: 12,
          email: "ahmedgamal@gmail.com",
        },
        {
          id: 10,
          name: "Agmed Gamal",
          avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
          age: 35,
          numberOfTrips: 12,
          email: "ahmedgamal@gmail.com",
        },
      ];
    const [data, setData] = useState(rows);
      
      const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };
    
  return (
    
    
    
    <div className={styles.productList}>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />

  
    </div>
  )
}
