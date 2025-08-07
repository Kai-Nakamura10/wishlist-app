// src/features/wishlist/containers/WishlistList.tsx
import type { WishlistItem } from "../types";
import WishlistCard from '../components/WishlistCard';
import styles from '../styles/WishlistContainer.module.css';

type Props = {
  items: WishlistItem[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function WishlistList({ items, onToggle, onDelete }: Props) {
  if (items.length === 0) return <p>欲しいものはありません。</p>;

  return (
    <div className={styles.listContainer}>
      {items.map((item) => (
        <WishlistCard
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}