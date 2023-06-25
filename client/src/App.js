import React, { Suspense, lazy } from 'react';
import {Routes,Route} from 'react-router-dom';

const App = () => {
  const HomePage=lazy(()=>import('../src/pages/home'));
  const BookDetailPage=lazy(()=>import('../src/pages/bookDetail'));
  return (
    <Suspense fallback={<>loading....</>}>
    <Routes>
      <Route path='/' Component={HomePage}/>
      <Route path='/book/:id' Component={BookDetailPage}/>
    </Routes>
    </Suspense>
  )
}

export default App