import Background from '../Background/Background';
import Navigation from '../Navigation/Navigation';
import Landing from '../Landing/Landing';
import Authentication from '../Authentication/Authentication';
import { Alert } from '../Alert/Alert';
import './App.css';
import { useEffect, useState } from 'react';
import SearchService from '../../Services/SearchService';
import { Results } from '../Results/Results';

function App() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [register, setRegister] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [account, setAccount] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  const handleAuthenticationClick = (e, reg) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setRegister(reg);
  };

  useEffect(() => {
  }, []);

  const addAlert = (type, message) => {
    setAlerts([...alerts, { id: alerts.length + 1, type, message }]);
  };

  const searchHandler = (query) => {
    SearchService.searchPosts(query).then(response => {
      setSearchResults(response);
    });
  }

  return (
    <div className="App">
      <Background
        background="https://images.unsplash.com/photo-1470115209269-18dd2d7285cd"
        color={
          searchResults ? "#000" : null
        }
        overlay={true} />
      {
        isLoggingIn && account === null ? (
          <Authentication
            register={register}
            showAlert={(type, message) => addAlert(type, message)}
            setAccount={setAccount}
            cancel={val => setIsLoggingIn(!val)} />
        ) : (
          <>
            <Navigation
              account={account}
              setSearchResults={setSearchResults}
              showLogo={searchResults ? true : false}
              authenticate={handleAuthenticationClick} />
            {
              searchResults ? (
                <Results results={searchResults.content} />
              ) : (
                <Landing searchHandler={searchHandler} />
              )
            }
          </>
        )
      }
      <Alert setAlerts={arr => setAlerts(arr)} alerts={alerts} />
    </div>
  );
}

export default App;