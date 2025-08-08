import type { WishlistItem } from '../types';
import { Link } from 'react-router-dom';
import styles from '../styles/WishlistCard.module.css';

type Props = {
  item: WishlistItem;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function WishlistCard({ item, onToggle, onDelete }: Props) {
  return (
    <div className={`${styles.card} ${item.bought ? styles.bought : ''}`}>
      {/* ✅ アイテム名に詳細ページへのリンクを設定 */}
      <h3 className={`${styles.title} ${item.bought ? styles.bought : ''}`}>
        <Link to={`/wishlist/${item.id}`} className={styles.link}>
          {item.name}
        </Link>
      </h3>

      <p className={styles.status}>
        ステータス: {item.bought ? '✅ 購入済み' : '🛒 未購入'}
      </p>

      <div className={styles.actions}>
        <button onClick={() => onToggle(item.id)}>
          {item.bought ? '↩ 未購入に戻す' : '✅ 購入済みにする'}
        </button>
        <button
          onClick={() => onDelete(item.id)}
          style={{ marginLeft: '1rem', color: 'red' }}
        >
          🗑 削除
        </button>
        <Link
          to={`/wishlist/${item.id}/edit`}
          className={styles.link}
          style={{ marginLeft: '1rem' }}
        >
          ✏️ 編集
        </Link>
      </div>
    </div>
  );
}