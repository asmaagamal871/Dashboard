import styles from "./TripList.module.css";
import {DeleteOutline } from '@mui/icons-material';
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {NavLink} from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

export default function TripList() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    
    {
      field: "city",
      headerName: "City",
      type: "text",
      width: 150,
    },
    {
      field: "company",
      headerName: "Company",
      type: "text",
      width: 150,
    },
    
    // { field: "company", headerName: "company", width: 130
    // ,
    // renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         <img className="userListImg" src={params.row.avatar} alt="" />
    //         {params.row.name}
    //       </div>
    //     );
    //   },
    
    // },
    
    {
      field: "bookedSeats",
      headerName: "Booked Seats",
      type: "number",
      width: 150,
    },

   
    
   
    {
      field: "duration",
      headerName: "Duration",
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
              
              <NavLink to="/company/EditTrip/1" exact>
              <button className={styles.userListEdit}>Edit</button>
              </NavLink>
               
           
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
      city: "alexandria",
      company: "Tour",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      bookedSeats: 12,
      duration: "1 Days",
    },
    
    {
      id: 2,
      city: "cairo",
      company: "Tour",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      bookedSeats: 15,
      duration: "3 Days",
    },
    
    {
      id: 3,
      city: "alexandria",
      company: "Tour",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      bookedSeats: 2,
      duration: "1 Days",
    },
    
    {
      id: 4,
      city: "alexandria",
      company: "Tour",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      bookedSeats: 7,
      duration: "5 Days",
    },
    
    {
      id: 5,
      city: "alexandria",
      company: "Tour",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      bookedSeats: 20,
      duration: "3 Days",
    },
    
    {
      id: 6,
      city: "alexandria",
      company: "Tour",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      bookedSeats: 17,
      duration: "2 Days",
    },
    
    
  ];
  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
  
    <div className={styles.userList}>
    <h3 className={styles.listTitle}>Recent Trips </h3>
    
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    <h3 className={styles.listTitle}>Past Trips </h3>
    
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      </div>
  );
}
