import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  return (
    <main className={styles.main}>
      <nav className={styles.mainNav}>
        <ul>
          <Link href='/'>
            <li>Home</li>
          </Link>
          <Link href='/about'>
            <li>About</li>
          </Link>
          <Link href='/blog'>
            <li>Blogs</li>
          </Link>
          <Link href='/contact'>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </main>
  );
};

export default Navbar;
