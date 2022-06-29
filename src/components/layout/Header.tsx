import React from 'react';
import logo from '../../images/logo.png';
import IconAccount from '../icons/Account';
import IconScoreboard from '../icons/Scoreboard';

const Header = (): JSX.Element => {
  return (
    <header>
      <div className="container container__logonav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <a href="">HOME</a>
          <a href="">LEVELS</a>
          <a href="">ABOUT</a>
        </nav>
      </div>
      <div className="container container__actions">
        <a href="">
          {/* todo dropdown tooltip with title of action: see scoreboard, go to account page */}
          <IconScoreboard />
        </a>
        <a href="">
          <IconAccount />
        </a>
      </div>
    </header>
  );
};

export default Header;
