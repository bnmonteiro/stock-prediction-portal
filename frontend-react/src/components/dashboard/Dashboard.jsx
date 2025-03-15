import {useEffect} from 'react'
import axiosInstance from '../../axiosInstance';
import axios from 'axios';
// import axiosInstance from '../../axiosInstance'

const Dashboard = () => {
  useEffect(()=>{
    const fetchProtectedData = async () =>{
        try{
            const response = await axiosInstance.get('/protected-view/');
            
        }catch(error){
            console.error('Error fetching data:', error)
        }
    }
    fetchProtectedData();
}, [])

  return <div className="text-light container">Dashboard</div>;
};

export default Dashboard;
