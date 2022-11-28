import { Routes, Route, Navigate} from 'react-router-dom';
import AdsPage from './components/adverts/AdvertsPage';
import LoginPage from './components/auth/LoginPage';
import NewAd from './components/adverts/NewAdvert';
import AdDetail from './components/adverts/AdvertDetail';
import RequireAuth from './components/auth/RequireAuth';
import Layout from './components/layout/Layout';

function App() {

  return (
    
    <div className="App">
        <Routes >
          <Route path ='/login' element={<LoginPage/>}/>
          <Route path = '/adverts' element={<Layout />}>

            <Route index element = {
              <RequireAuth >
                <AdsPage />
              </RequireAuth>}/>
            <Route path = ':id' element={
              <RequireAuth >
                <AdDetail />
              </RequireAuth>}/>
            <Route path = 'new' element= {
              <RequireAuth>
                <NewAd />
              </RequireAuth>}/>

          </Route>
          
          <Route path='/' element={<Navigate to='/adverts'/>}/>
          <Route path='/404' element={<h1>404 | Not Found</h1>}/>
          <Route path='*' element={<Navigate to='/404'/>}/>
        </Routes>
    </div>
  );
}

export default App;
