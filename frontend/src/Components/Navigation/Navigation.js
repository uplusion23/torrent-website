import './Navigation.css';

const Navigation = props => {
  return (
    <nav className="navigation">
      {
        props.showLogo && <div
          onClick={() => props.setSearchResults(null)}
          className="logo">Kracken Torrents</div>
      }
      <span onClick={() => {
        props.listHandler({
          sort: 'seeders,DESC'
        });
      }}>Top</span>
      <span onClick={() => {
        props.listHandler({
          sort: 'leechers,DESC'
        });
      }}>Popular</span>
      <span onClick={() => {
        props.listHandler({
          sort: 'published'
        });
      }}>New</span>
      {
        props.account !== null ? (
          <>
            <span
              className="primary"
              onClick={() => props.setIsModalShown(true)}>Upload</span>
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