import './Navigation.css';

const Navigation = props => {
  return (
    <nav className="navigation">
      <span>Top 100</span>
      <span>Trending</span>
      <span>New</span>
      <span>Upload</span>
      <span className="push">Register</span>
      <span>Login</span>
    </nav>
  )
}

export default Navigation;