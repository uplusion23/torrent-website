import { ResultsTable } from '../ResultsTable/ResultsTable';
import './Results.css';

export const Results = props => {
  return (
    <div className="results">
      <ResultsTable results={props.results} />
    </div>
  )
}