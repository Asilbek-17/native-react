import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Student.css"

export const Student = () => {
    let { uId } = useParams();
    console.log(uId);
    return (
        <>
            <Link className='back-link' to={-1}>Orqaga ↩️</Link>
            <h2 className='natija-title'>Natija Berish :</h2>
            <div className='natija-wrapper'>
                <p>🟩</p>
                <p>🟥</p>
                <p>🟪</p>
            </div>
        </>
    )
}
