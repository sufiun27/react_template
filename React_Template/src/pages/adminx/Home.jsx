import React from 'react'
import api from '@apiA'
import { useEffect } from 'react';


export default function Home() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/test');
        console.log('Data fetched:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div>Home</div>
  )
}

