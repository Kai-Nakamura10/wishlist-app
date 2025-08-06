import { Link } from "react-router-dom";
import styles from "../../styles/home.module.css";

export default function HomePage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>欲しいものアプリ</h1>
            <p className={styles.description}>
                欲しいものを管理しよう！
            </p>
            <Link to="/wishList" className={styles.link}>
                欲しいものリストへ
            </Link>
        </div>
    );
}