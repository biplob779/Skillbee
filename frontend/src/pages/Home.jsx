import React, { useEffect, useState } from 'react'
import api from '../api'
import ProviderCard from '../components/ProviderCard'

export default function Home(){
  const [providers,setProviders] = useState([])
  useEffect(()=>{
    api.get('/api/providers')
      .then(r=>setProviders(r.data))
      .catch(e=> console.error(e))
  },[])
  return (
    <div>  
      <h1 className="text-2xl font-bold mb-4">Available Helpers Nearby</h1>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
        {providers.map(p=> <ProviderCard key={p._id} p={p} />)}  
      </div>  
    </div>
  )
}
