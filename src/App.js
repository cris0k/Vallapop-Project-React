import { useState } from 'react';
import AdsPage from '../src/components/adverts/AdvertsPage';
import LoginPage from './components/adverts/auth/LoginPage';

function App({isInitiallyLogged}) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged)

  const handleLogin = () => setIsLogged(true)
  const handleLogout = () => setIsLogged(false)

  return (
    <div className="App">
      {isLogged ? (
      <AdsPage isLogged={isLogged} onLogout={handleLogout}/>
      ) : (
      <LoginPage onLogin={handleLogin} />)}     
      
    </div>
  );
}

export default App;
