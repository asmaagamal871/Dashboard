import styles from "./GuideBookingList.module.css";
import {DeleteOutline } from '@mui/icons-material';
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function GuideBookingList() {
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
      field: "phone",
      headerName: "Phone",
      type: "text",
      width: 120,
    },
    {
      field: "email",
      headerName: "Email",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 220,
    },
    {
      field: "from",
      headerName: "From",
      type: "text",
      width: 90,
    },
    {
      field: "to",
      headerName: "To",
      type: "text",
      width: 90,
    },
    {
      field: "duration",
      headerName: "Duration  ",
      type: "number",
      width: 150,
    },
    
   
    
//     {
//         field: "action",
//         headerName: "Action",
//         width: 180,
//         renderCell: (params) => {
//           return (
            
//               <div className={styles.conOfButtons}>
//                 <button className={styles.userListEdit}>Edit</button>
//                 <button className={styles.userListEdit}>Show</button>
           
//               <DeleteOutline
// onClick={() => handleDelete(params.row.id)}
// className={styles.userListDelete}  />
//             </div>
//           );
//         },
//       },
    
  ];
  const rows = [
 
    
    
    {
      id: 1,
      name: "Ahmed Gamal",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      phone: "01553636254",
      duration: 1,
      email: "ahmedgamal@gmail.com",
      from:"2-3-2022",
      to:"3-4-2022",
      
    },
    
    {
      id: 2,
      name: "Ahmed Gamal",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      phone: "01553636254",
      duration: 1,
      email: "ahmedgamal@gmail.com",
      from:"2-3-2022",
      to:"3-4-2022",
      
    },
    
    {
      id: 3,
      name: "Ahmed Gamal",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      phone: "01553636254",
      duration: 1,
      email: "ahmedgamal@gmail.com",
      from:"2-3-2022",
      to:"3-4-2022",
      
    },
    
    {
      id: 4,
      name: "Ahmed Gamal",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      phone: "01553636254",
      duration: 1,
      email: "ahmedgamal@gmail.com",
      from:"2-3-2022",
      to:"3-4-2022",
      
    },
    
    {
      id: 5,
      name: "Ahmed Gamal",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      phone: "01553636254",
      duration: 1,
      email: "ahmedgamal@gmail.com",
      from:"2-3-2022",
      to:"3-4-2022",
      
    },
    
    {
      id: 6,
      name: "Ahmed Gamal",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      phone: "01553636254",
      duration: 1,
      email: "ahmedgamal@gmail.com",
      from:"2-3-2022",
      to:"3-4-2022",
      
    },
    
    {
      id: 7,
      name: "Ahmed Gamal",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      phone: "01553636254",
      duration: 1,
      email: "ahmedgamal@gmail.com",
      from:"2-3-2022",
      to:"3-4-2022",
      
    },
    
    {
      id: 8,
      name: "Ahmed Gamal",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      phone: "01553636254",
      duration: 1,
      email: "ahmedgamal@gmail.com",
      from:"2-3-2022",
      to:"3-4-2022",
      
    },
    
    {
      id: 9,
      name: "Ahmed Gamal",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      phone: "01553636254",
      duration: 1,
      email: "ahmedgamal@gmail.com",
      from:"2-3-2022",
      to:"3-4-2022",
      
    },
    
    {
      id: 10,
      name: "Ahmed Gamal",
      avatar: "/Images/Dashboard/profilePhoto/profile.jpg",
      phone: "01553636254",
      duration: 1,
      email: "ahmedgamal@gmail.com",
      from:"2-3-2022",
      to:"3-4-2022",
      
    },
    
    
   
  ];
  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (

    <div className={styles.userList}>
    <h3 className={styles.headGuide}>Bookings</h3>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
