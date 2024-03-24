import React from 'react'
import "./guruh.css"
import { Link, useParams } from 'react-router-dom'

export const Guruh = () => {
    let { id } = useParams();
    console.log(id);
    return (
        <>
            <Link className='back-link' to={-1}>Orqaga ↩️</Link>
            <div className='guruh-wrapper'>
                <h2 className='guruh-title'>O'quvchilar :</h2>
                <Link className='guruh-btn' to={"/student/" + 1}>Raximov Dilshod</Link>
                <Link className='guruh-btn' to={"/student/" + 2}>Raximov Dilshod</Link>
                <Link className='guruh-btn' to={"/student/" + 3}>Raximov Dilshod</Link>
            </div>
        </>

    )
}
