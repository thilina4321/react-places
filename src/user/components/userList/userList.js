import axios from "axios";
import React, { useEffect, useState } from "react";
import UserItem from '../userItem/userItem'

const UserList = () => {

  const [items, setItems] = useState([])
  
  useEffect(()=>{
    const fetchUsers = async()=>{
      const users = await axios.get('http://localhost:3001/user/users')
      console.log(users.data);
      setItems(users.data)

    }
    fetchUsers()
  }, [])


  if(items.length === 0) {
    return (
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h2> No Users have yet </h2>
      </div>
    );
  }

  return (
    <div>
      {items.map((item) => {
        return (
          <UserItem
            key={item._id}
            id={item._id}
            name={item.userName}
          />
        );
      })}
    </div>
  );
};

export default UserList;
