import Header from './Header';

import styles from '../styles/components/layout.scss';

const Layout = props => (
  <div className={styles.main}>
    <Header />
    {props.children}
  </div>
);

export default Layout;