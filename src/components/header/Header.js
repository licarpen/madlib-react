import React from 'react';
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>
        MadLibs
      </h1>
      <h2>
        A really fun fill-in-the-blanks word game.
      </h2>
    </header>
  );
};

export default Header;
