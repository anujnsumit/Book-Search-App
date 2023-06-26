import React, { useState } from 'react'
import '../../static/css/bookList.css'
import Card from '../../components/Card.jsx'
import { BsSearch } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import Bg from '../../static/assets/images/bg1.jpg';

const BookList = () => {
  const [cards, setCards] = useState([]);

  const list = useSelector((state) => state.bookData.booksList)

  const handleText = (e) => {
    const filterCards = list.filter((card) => card.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setCards(filterCards);
  }

  console.log("cards:", cards)

  return (
    <div className='main'>
      <form >
        <img src={Bg} />
        <div className='search'>
          <input type='text' onChange={handleText} placeholder='Search books' />
          <button type='submit'>
            <BsSearch />
          </button>
        </div>

      </form>

      {
        cards.length > 0 ?
          <div className='cards'>
            {
              cards.map((card) => {
                return (
                  <div key={card.id}>
                    <Card
                      id={card.id}
                      title={card.title}
                      description={card.description}
                      pageCount={card.pageCount}
                      publishDate={card.publishDate}
                    />
                  </div>
                )
              })
            }
          </div> :
          <div className='cards'>
            {
              list.slice(0, 10).map((card) => {
                return (
                  <div key={card.id}>
                    <Card
                      id={card.id}
                      title={card.title}
                      description={card.description}
                      pageCount={card.pageCount}
                      publishDate={card.publishDate}
                    />
                  </div>
                )
              })
            }
          </div>
      }
    </div>
  )
}

export default BookList;