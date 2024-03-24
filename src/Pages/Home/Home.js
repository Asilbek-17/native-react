import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
export const Home = () => {
  return (
    <div className='guruh-wrapper'>
      <h1 className='guruh-title'>Guruhlar :</h1>
      <Link className='guruh-btn' to={"/guruh/" + 1}>Dashturlash (D.Ch.J) 14:00</Link>
      <Link className='guruh-btn' to={"/guruh/" + 2}>Dashturlash (D.Ch.J) 14:00</Link>
      <Link className='guruh-btn' to={"/guruh/" + 3}>Dashturlash (D.Ch.J) 14:00</Link>
    </div>
  )
}
