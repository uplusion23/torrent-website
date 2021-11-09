import Background from '../Background/Background';
import Navigation from '../Navigation/Navigation';
import Landing from '../Landing/Landing';
import { useState } from 'react';
import './App.css';
import Authentication from '../Authentication/Authentication';

function App() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [register, setRegister] = useState(false);

  const handleAuthenticationClick = (e, reg) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setRegister(reg);
  };

  return (
    <div className="App">
      <Background background="https://images.unsplash.com/photo-1470115209269-18dd2d7285cd" overlay={true} />
      {
        isLoggingIn ? (
          <Authentication register={register} cancel={val => setIsLoggingIn(!val)} />
        ) : (
          <>
            <Navigation authenticate={handleAuthenticationClick} />
            <Landing />
          </>
        )
      }
    </div>
  );
}

export default App;