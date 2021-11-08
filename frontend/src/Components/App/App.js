import Background from '../Background/Background';
import Navigation from '../Navigation/Navigation';
import Landing from '../Landing/Landing';
import './App.css';
import Authentication from '../Authentication/Authentication';

function App() {
  return (
    <div className="App">
      <Background background="https://images.unsplash.com/photo-1470115209269-18dd2d7285cd" overlay={true} />
      {/* <Navigation />
      <Landing /> */}
      <Authentication />
    </div>
  );
}

export default App;