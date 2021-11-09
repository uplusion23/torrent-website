import './ResultsTable.css';

export const ResultsTable = props => {
  return (
    <div className="results-table">
      {
        props.results.map(result => {
          return <span>{result.title}</span>
        })
      }
    </div>
  )
}