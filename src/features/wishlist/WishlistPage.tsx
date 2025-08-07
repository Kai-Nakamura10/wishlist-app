import WishlistList from './containers/WishlistContainer.tsx';
import { useWishlist } from './hooks/useWishlist.ts';

export default function WishlistPage() {
    const { items, isLoading } = useWishlist();

    return (
        <div style={{ padding: '2rem' }}>
            <h1>🛍 欲しいもの一覧</h1>
            {isLoading ? (
                <p>読み込み中...</p>
            ) : (
                <WishlistList items={items} />
            )}
        </div>
    );
}