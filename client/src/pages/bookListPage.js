import React, { useEffect } from 'react'
import { BookList } from '../features/index';
import { getBookData } from '../app/bookSlice';
import { useDispatch } from 'react-redux';

const BookListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookData());
  }, [])

  return (
    <>
      <BookList />
    </>
  )
}

export default BookListPage;