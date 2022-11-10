import { Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';
import AdsPage from './components/adverts/AdvertsPage';
import LoginPage from './components/adverts/auth/LoginPage';
import NewAd from './components/adverts/NewAdvert';
import AdDetail from './components/adverts/AdvertDetail';
import RequireAuth from './components/adverts/auth/RequireAuth';
import Layout from './components/layout/Layout';

function App({isInitiallyLogged}) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged)

  const handleLogin = () => setIsLogged(true)
  const handleLogout = () => setIsLogged(false)

  return (
    
    <div className="App">
      <Routes >
        <Route path ='/login' element={<LoginPage onLogin={handleLogin} />}/>
        <Route
        path = '/api/v1/adverts' 
        element={<Layout isLogged={isLogged} onLogout={handleLogout} />}>

          <Route index element = {
            <RequireAuth isLogged={isLogged}>
              <AdsPage />
            </RequireAuth>}/>
          <Route path = ':id' element={
            <RequireAuth isLogged={isLogged}>
              <AdDetail />
            </RequireAuth>}/>
          <Route path = 'new' element= {
            <RequireAuth isLogged={isLogged}>
              <NewAd />
            </RequireAuth>}/>

        </Route>
        
        <Route path='/' element={<Navigate to='/api/v1/adverts'/>}/>
        <Route path='/404' element={<h1>404 | Not Found</h1>}/>
        <Route path='*' element={<Navigate to='/404'/>}/>
      </Routes>
    </div>
  );
}

export default App;
