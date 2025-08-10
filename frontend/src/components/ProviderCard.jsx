import React from 'react'
import { Link } from 'react-router-dom'
export default function ProviderCard({ p }){
  return (
    <div className="p-4 bg-white rounded shadow">  
      <h2 className="font-semibold">{p.title}</h2>  
      <p className="text-sm text-gray-600">{p.description}</p>  
      <div className="mt-2 flex justify-between items-center">  
        <div className="text-sm">₹{p.pricePerHour}/hr</div>  
        <Link to={`/provider/${p._id}`} className="text-blue-600">Book</Link>  
      </div>  
    </div>
  )
}
