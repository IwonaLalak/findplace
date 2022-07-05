import React, { ReactElement } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div id="appLayout">
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
