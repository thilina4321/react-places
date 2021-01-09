import axios from 'axios'
import { useSelector } from 'react-redux'


     const token = useSelector(state => state.auth.token)
     console.log(token);

    const  instance = axios.create({
        baseURL:'http://localhost:3001/'
    })


instance.defaults.headers.common['Authorization'] = `Bearer ${token}` 
export default instance