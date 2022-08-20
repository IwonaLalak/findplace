import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import IconAccount from '../icons/Account';
import IconScoreboard from '../icons/Scoreboard';

const Header = (): JSX.Element => {
  return (
    <header>
      <div className="container container--logonav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/levels">LEVELS</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/test">TEST UIUX COMPONENTS</Link>
        </nav>
      </div>
      <div className="container container--actions">
        <Link to="/scoreboard">
          {/* todo dropdown tooltip with title of action: see scoreboard, go to account page */}
          <IconScoreboard />
        </Link>
        <Link to="/account">
          <IconAccount />
        </Link>
      </div>
    </header>
  );
};

export default Header;
