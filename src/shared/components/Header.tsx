// src/components/Header.tsx
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          🏠 ホーム
        </Link>
        <Link to="/wishlist" className={styles.link}>
          🛍 欲しいもの一覧
        </Link>
        <Link to="/wishlist/new" className={styles.button}>
          ＋ 追加
        </Link>
      </nav>
    </header>
  );
}