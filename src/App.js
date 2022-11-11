import { Routes, Route, Navigate} from 'react-router-dom';
import { useState } from 'react';
import AdsPage from './components/adverts/AdvertsPage';
import LoginPage from './components/adverts/auth/LoginPage';
import NewAd from './components/adverts/NewAdvert';
import AdDetail from './components/adverts/AdvertDetail';
import RequireAuth from './components/adverts/auth/RequireAuth';
import Layout from './components/layout/Layout';
import { AuthContextProvider } from './components/adverts/auth/Context';

function App({isInitiallyLogged}) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged)

  const handleLogin = () => setIsLogged(true)
  const handleLogout = () => setIsLogged(false)

  return (
    
    <div className="App">
      <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
        <Routes >
          <Route path ='/login' element={<LoginPage/>}/>
          <Route
          path = '/api/v1/adverts' 
          element={<Layout />}>

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
          
          <Route path='/' element={<Navigate to='/api/v1/adverts'/>}/>
          <Route path='/404' element={<h1>404 | Not Found</h1>}/>
          <Route path='*' element={<Navigate to='/404'/>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
