import './ResultsTable.css';

export const ResultsTable = props => {
  return (
    <div className="results-table">
      <div className="table">
        <div className="tr">
          <span>Name</span>
          <span>Time</span>
          <span>Author</span>
          <span>Seeders</span>
          <span>Leechers</span>
          <span>Link</span>
        </div>
        {
          props.results.map((result, index) => {
            return (
              <div className="tr" key={index}>
                <span>{result.title}</span>
                <span>{result.published}</span>
                <span>{result.user.username}</span>
                <span className="seeders">{result.seeders}</span>
                <span className="leechers">{result.leechers}</span>
                <span className="link"><a href={result.link}><i className="gg-magnet"></i></a></span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}