import { useState } from 'react';
import AdsPage from '../src/components/adverts/AdvertsPage';
import LoginPage from './components/adverts/auth/LoginPage';
/* import NewAd from './components/adverts/NewAdvert'; */

function App() {
  const [IsLogged, setIsLogged] = useState(false)

  const handleLogin = () => setIsLogged(true)

  return (
    <div className="App">
      {IsLogged ? <AdsPage /> : <LoginPage onLogin={handleLogin} />}
      
{/*       <NewAd />
 */}      
      
    </div>
  );
}

export default App;
