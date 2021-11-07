import './App.css';

import Header from '../Header/Header';

import Copyright from 'components/Copyright';
import { Route, Routes } from 'react-router-dom';
import NewsList from '../NewsList/NewsList';
import NewsPage from '../newsSelected/NewsPage';
import useWindow from 'hooks/useWindow';

function App() { 

  const { isMobile } = useWindow();
  
  return <div className="App">
    <Routes>
      <Route path={"/:newsPage"} element={
        !isMobile ?
        <>
          <Header />
          <NewsList />
          <NewsPage />
          <Copyright />
        </>:<>
          <NewsPage />
        </>
      }/>
      <Route path={"/"} element={
        <>
        <Header />
        <NewsList />
        <Copyright />
        </>
      } />
    </Routes>
  </div>;
}

export default App;