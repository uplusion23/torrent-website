import Background from '../Background/Background';
import Navigation from '../Navigation/Navigation';
import Landing from '../Landing/Landing';
import Authentication from '../Authentication/Authentication';
import { Alert } from '../Alert/Alert';
import './App.css';
import { useEffect, useState } from 'react';
import SearchService from '../../Services/SearchService';
import { Results } from '../Results/Results';
import { CreateModal } from '../CreateModal/CreateModal';

function App() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [register, setRegister] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [account, setAccount] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState({});
  const [isModalShown, setIsModalShown] = useState(false);

  const handleQuery = ({
    query = '',
    page = 0,
    size = 10,
    sort = '',
    type = ''
  } = {}) => {
    setQuery({
      query, page, size, sort, type
    });
    SearchService.getPosts({query, page, size, sort}, type).then(response => {
      if (type === 'search') {
        setSearchTerm({
          text: `${(query !== '') ? 'Search results for ' : 'No query provided'}`,
          searchTerm: `${(query !== '') ? "\"" + query + "\"" : ''}`
        });
      } else {
        setSearchTerm({
          text: "Showing results based on ",
          searchTerm: `"${sort.split(',')[0]}"`
        });
      }
      setSearchResults(response);
    });
  }

  const handleQueryPaged = page => {
    console.log(query);
    handleQuery({
      ...query,
      page
    });
  }

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

  return (
    <div className="App">
      <Background
        background="https://images.unsplash.com/photo-1503942142281-94af0aded523"
        color={
          searchResults ? "#000" : null
        }
        overlay={true} />
      {
        isLoggingIn && account === null ? (
          <Authentication
            register={register}
            showAlert={addAlert}
            setAccount={setAccount}
            cancel={val => setIsLoggingIn(!val)} />
        ) : (
          <>
            <Navigation
              account={account}
              listHandler={handleQuery}
              setSearchResults={setSearchResults}
              showLogo={searchResults ? true : false}
              setIsModalShown={setIsModalShown}
              authenticate={handleAuthenticationClick} />
            {
              searchResults ? (
                <Results
                  results={searchResults.content}
                  page={{
                    size: searchResults.size,
                    totalPages: searchResults.totalPages,
                    totalElements: searchResults.totalElements,
                    pageNumber: searchResults.number - 1,
                    first: searchResults.first,
                    last: searchResults.last,
                    empty: searchResults.empty
                  }}
                  handleQueryPaged={handleQueryPaged}
                  searchTerm={searchTerm}
                  searchHandler={handleQuery}/>
              ) : (
                <Landing searchHandler={handleQuery} />
              )
            }
          </>
        )
      }
      <Alert setAlerts={arr => setAlerts(arr)} alerts={alerts} />
      {
        isModalShown && <CreateModal
          showAlert={addAlert}
          account={account}
          setIsModalShown={setIsModalShown} />
      }
    </div>
  );
}

export default App;