import AdsPage from '../src/components/adverts/AdvertsPage';
import LoginPage from './components/adverts/auth/LoginPage';
import NewAd from './components/adverts/NewAdvert';

function App() {
  return (
    <div className="App">
      <AdsPage />
      <NewAd />
      <LoginPage />
    </div>
  );
}

export default App;
