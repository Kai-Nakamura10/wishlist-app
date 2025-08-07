import type { WishlistItem } from '../types';
import styles from '../styles/WishlistCard.module.css';

type Props = {
    item: WishlistItem;
};

export default function WishlistCard({ item }: Props) {
    return (
        <div
            className={`${styles.card} ${item.bought ? styles.bought : ''}`}
        >
            <h3
                className={`${styles.title} ${item.bought ? styles.bought : ''}`}
            >
                {item.name}
            </h3>
            <p className={styles.status}>
                ステータス: {item.bought ? '✅ 購入済み' : '🛒 未購入'}
            </p>
        </div>
    );
}