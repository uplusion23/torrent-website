import { useState } from 'react';
import { Pagination } from '../Pagination/Pagination';
import { ResultsTable } from '../ResultsTable/ResultsTable';
import './Results.css';

export const Results = props => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchHandler = e => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    if (e.key === 'Enter') {
      props.searchHandler({
        query: searchTerm,
        type: 'search'
      });
    }
  }

  return (
    <div className="results">
      <div className="results-header">
        <h2>{props.searchTerm.text}<span>{props.searchTerm.searchTerm}</span>.</h2>
        <input onKeyUp={searchHandler} type="text" placeholder="Search..." spellCheck={false} />
      </div>
      <ResultsTable results={props.results} />
      <Pagination handleQueryPaged={props.handleQueryPaged} page={props.page} />
    </div>
  )
}