import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import MainPanel from '../MainPanel/MainPanel';
import useWindow from 'hooks/useWindow';
import Copyright from 'components/Copyright';
import NewsList from '../NewsList/NewsList';
import NewsPage from '../newsSelected/NewsPage';

import { ReactComponent as WaveSvg} from 'assets/svg/wave.svg';

function App() { 

  const { isMobile } = useWindow();

  return <div className="App">
    <Routes>
      <Route path={"/:city/:lat/:lng/:newsId"} element={
        !isMobile ?
          <>
            <MainPanel />
            <NewsList />
            <NewsPage />
            <Copyright />
          </> : <>
            <NewsPage />
          </>
      } />
      <Route path={"/:city/:lat/:lng"} element={
        <>
          <MainPanel />
          <NewsList />
          <Copyright />
        </>
      }/>
      <Route path={"/"} element={
        <>
          <MainPanel />
          <Copyright />
          <WaveSvg style={{position:'fixed', bottom: 0, zIndex: 0}}/>
        </>
      } />
      <Route path={"*"} element={
        <Navigate to="/" />}
      />
    </Routes>
  </div>;
}

export default App;