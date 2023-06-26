import React, { useEffect } from 'react'
import '../../static/css/deatil.css'
import { useDispatch, useSelector } from 'react-redux'
import { getBookDetails } from '../../app/bookSlice';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Book from '../../static/assets/images/book.jpg'

const BookDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const details = useSelector((state) => state.bookData.booksDetails.books);

  console.log("details:", details)

  useEffect(() => {
    dispatch(getBookDetails(id))
  }, [])

  return (
    <main>
      <div className='backToHome' onClick={() => navigate('/')}>Go back to home</div>
      
      <section>
        <div className='image-part'>
          <img src={Book} />
        </div>
        <div className='details-part'>
          <p className='tit'>{details?.title}</p>
          <p className='des'>{details?.description}</p>
          <p className='pc'>Number of pages: {details?.pageCount}</p>
          <p className='pd'>Publish Date: {details?.publishDate}</p>
        </div>
      </section>

    </main>
  )
}

export default BookDetail;