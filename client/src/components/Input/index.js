import React from 'react'

const Input = ({bookValue,searchBook}) => {
  return (
    <>
    <input type='text' 
    placeholder='Search book' 
    value={bookValue}
    onChange={searchBook}
    />
    </>
  )
}

export default Input;