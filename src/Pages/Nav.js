import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <div className="navBar">
      <h1 className="title">Math Magician</h1>
      <div className="menuItems">
        <Link className='homeLink' to="/">HOME</Link>
        <Link className='calculatorLink' to="/calculator">CALCULATOR</Link>
        <Link className='quoteLink' to="/quote">QUOTES</Link>
      </div>
    </div>
  )
}

export default Nav;