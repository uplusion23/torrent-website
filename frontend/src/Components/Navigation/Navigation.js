import './Navigation.css';

const Navigation = props => {
  return (
    <nav className="navigation">
      <span>Top 100</span>
      <span>Trending</span>
      <span>New</span>
      <span>Upload</span>
      <span
        onClick={e => props.authenticate(e, true)}
        className="push">Register</span>
      <span
        onClick={e => props.authenticate(e, false)}
        >Login</span>
    </nav>
  )
}

export default Navigation;