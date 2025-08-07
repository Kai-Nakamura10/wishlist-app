// src/features/wishlist/WishlistPage.tsx
import WishlistList from './containers/WishlistContainer';
import { useWishlist } from './hooks/useWishlist';

export default function WishlistPage() {
  const { items, isLoading, handleToggle, handleDelete } = useWishlist();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🛍 欲しいもの一覧</h1>
      {isLoading ? (
        <p>読み込み中...</p>
      ) : (
        <WishlistList
          items={items}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
