import Link from 'next/link';
import styles from '../styles/components/layout.scss';

const Header = () => (
  <div className={styles.header}>
    <Link href="/">
      <img className={styles.logo} src="static/img/logo.png"/>
    </Link>
    <Link href="/about">
      <a className={styles.link}>About</a>
    </Link>
  </div>
);

export default Header;