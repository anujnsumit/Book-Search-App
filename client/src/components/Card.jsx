import React, { useEffect } from 'react'
import '../static/css/card.css'
import Book from '../static/assets/images/book.jpg'
import { useNavigate } from 'react-router-dom';


function Card(props) {
    const navigate = useNavigate();

    const handleCard = (e) => {
        navigate(`/book/${props.id}`)
    }

    return (
        <main className='list'>
            <div className='card' onClick={handleCard}>
                <img src={Book} />
                <h5>{props.title}</h5>
                <p className='pd' >Number of pages: {props.pageCount}</p>
                <p className='pd'>Published Date: {props.publishDate}</p>
            </div>
        </main>
    )
}

export default Card;