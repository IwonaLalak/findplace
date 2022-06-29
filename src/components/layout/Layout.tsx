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
      <section>
        {children} <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1>{' '}
        <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1>{' '}
        <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1> <h1>aaa</h1>
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
