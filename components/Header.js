import Link from 'next/link';

import styles from '../styles/components/layout.scss';

const Header = () => (
  <div className={styles.header}>
    <Link href="/">
      <a className={styles.headerLink}>Home</a>
    </Link>
    <Link href="/about">
      <a className={styles.headerLink}>About</a>
    </Link>
  </div>
);

export default Header;