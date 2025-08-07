import type { WishlistItem } from "../types";
import WishlistCard from '../components/WishlistCard';
import styles from '../styles/WishlistContainer.module.css';

type Props = {
    items: WishlistItem[];
};

export default function WishlistList({ items }: Props) {
    if (items.length === 0) return <p>欲しいものはありません。</p>;

    return (
        <div className={styles.listContainer}>
            {items.map((item) => (
                <WishlistCard key={item.id} item={item} />
            ))}
        </div>
    );
}