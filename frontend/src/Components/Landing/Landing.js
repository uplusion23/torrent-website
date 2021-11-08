import { useState } from 'react';
import './Landing.css';

const Landing = props => {
  const [placeholder, setPlaceholder] = useState('Search...');

  const placeholderStrings = props.placeholderStrings || [
    "Search for movies...",
    "Search for TV shows...",
    "Search for games...",
    "Search for books...",
    "Search for software..."
  ]

  return (
    <div className="landing-page">
      <div className="logo"></div>
      <h1>Kracken Torrents</h1>
      <div className="search-box">
        <input type="text" placeholder={placeholder} spellCheck={false} />
        <span className="icon">
          <i className="gg-search" />
        </span>
      </div>
    </div>
  )
};

export default Landing;