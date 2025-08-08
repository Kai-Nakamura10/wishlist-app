import { Link } from 'react-router-dom';
import WishlistList from './containers/WishlistContainer';
import { useWishlist } from './contexts/WishlistContext';

export default function WishlistPage() {
  const { items, isLoading, handleToggle, handleDelete } = useWishlist();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🛍 欲しいもの一覧</h1>

      {/* ✅ ここに追加リンクを表示 */}
      <div style={{ marginBottom: '1rem' }}>
        <Link to="/wishlist/new" style={{ fontWeight: 'bold', textDecoration: 'none' }}>
          + 欲しいものを追加
        </Link>
      </div>

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
