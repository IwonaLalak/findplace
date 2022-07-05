import React from 'react';
import IconGithub from '../icons/Github';
import IconWeb from '../icons/Web';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="createdby">Created by Iwona Lalak &copy; 2022</div>
      <div className="links">
        <a href="https://github.com/IwonaLalak" target="_blank">
          <IconGithub /> my github
        </a>
        <a href="https://iwonalalak.pl/" target="_blank">
          <IconWeb /> my homepage
        </a>
      </div>
    </footer>
  );
};

export default Footer;
