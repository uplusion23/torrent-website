import './Navigation.css';

const Navigation = props => {
  return (
    <nav className="navigation">
      {
        props.showLogo && <div
          onClick={() => props.setSearchResults(null)}
          className="logo">Kracken Torrents</div>
      }
      <span>Top 100</span>
      <span>Trending</span>
      <span>New</span>
      {
        props.account !== null ? (
          <>
            <span>Upload</span>
            <span className="username">{props.account.username}</span>
          </>
        ) : (
          <>
            <span
              onClick={e => props.authenticate(e, true)}
              className="push">Register</span>
            <span
              onClick={e => props.authenticate(e, false)}
              >Login</span>
            </>
          )
      }
    </nav>
  )
}

export default Navigation;