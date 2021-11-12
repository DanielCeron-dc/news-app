import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import useWindow from 'hooks/useWindow';
import Copyright from 'components/Copyright';
import NewsList from '../NewsList/NewsList';
import NewsPage from '../newsSelected/NewsPage';

function App() { 

  const { isMobile } = useWindow();

  return <div className="App">
    <Routes>
      <Route path={"/:city/:lat/:lng/:newsId"} element={
        !isMobile ?
          <>
            <Header />
            <NewsList />
            <NewsPage />
            <Copyright />
          </> : <>
            <NewsPage />
          </>
      } />
      <Route path={"/:city/:lat/:lng"} element={
        <>
          <Header />
          <NewsList />
          <Copyright />
        </>
      }/>
      <Route path={"/"} element={
        <>
          <Header />
          <Copyright />
        </>
      } />
      <Route path={"*"} element={
        <Navigate to="/" />}
      />
    </Routes>
  </div>;
}

export default App;