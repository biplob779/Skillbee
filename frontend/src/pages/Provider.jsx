import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'

export default function Provider(){
  const { id } = useParams()
  const [p,setP] = useState(null)
  useEffect(()=>{
    api.get('/api/providers')
      .then(r=> setP(r.data.find(x=> x._id === id)))
      .catch(e => console.error(e))
  },[id])
  if(!p) return <div>Loading...</div>
  return (
    <div>  
      <h1 className="text-2xl font-bold">{p.title}</h1>  
      <p className="mt-2">{p.description}</p>  
      <div className="mt-4">  
        <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={()=>{  
          const payload = { provider: p._id, customer: 'TEST_ID', startTime: new Date(), durationHours: 1, totalAmount: p.pricePerHour }
          api.post('/api/bookings', payload).then(()=> alert('Booked (mock)')).catch(e=>{console.error(e); alert('Booking failed')})
        }}>Book 1 hour</button>  
      </div>  
    </div>
  )
}
