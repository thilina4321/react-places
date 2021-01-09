import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MyPlaceItem from '../MyPlaceItem/MyPlaceItem'

const MyPlaceList = (props) => {

  const [places, setplaces] = useState([]);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
      if(token){
    const fetchPlaces = async () => {
      try {
        const places = await axios.get("http://localhost:3001/place/me", {
            headers:{"Authorization":`Bearer ${token}`},
        });
        setplaces(places.data);
        console.log(places);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlaces();
}
  }, [token]);

    if(places.length === 0){
        return (
            <div style={{textAlign:'center'}}>
                <h1> No places yet.... </h1>
            </div>
        )
    }
    return (
        <div>
        {!token && <Redirect to="/"/>}
            {places.map(place=>{
                const {_id, title, address, description} = place
                return <MyPlaceItem key={_id}
                title={title}
                address={address}
                description={description}
                 id={_id}/>
            })}
        </div>
    )
}

export default MyPlaceList
