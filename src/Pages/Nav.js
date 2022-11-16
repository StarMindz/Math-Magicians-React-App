/* eslint-disable arrow-body-style */
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
  const [ state, setState ] = useState({toggle: true});

  const pullMenu = () => {
    console.log("go girl")
    setState((state) => {return {toggle: !state.toggle}});
  }

  return (
    <div className="navBar">
      <h1><a className="title" href='/#'> Math Magician </a></h1>
      <div className={state.toggle ? 'menuItems':'menuItems active'}>
        <Link onClick={pullMenu} className="homeLink" to="/">HOME</Link>
        <Link onClick={pullMenu} className="calculatorLink" to="/calculator">CALCULATOR</Link>
        <Link  onClick={pullMenu}className="quoteLink" to="/quote">QUOTES</Link>
      </div>
      <div className={state.toggle ? 'hamburger':'hamburger active'} onClick={pullMenu}>
        <span className='horizontal'></span>
        <span className='horizontal'></span>
        <span className='horizontal'></span>
      </div>
    </div>
  );
};

export default Nav;
