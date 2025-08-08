// src/features/wishlist/pages/WishlistDetailPage.tsx
import { useParams, Link } from 'react-router-dom';
import { useWishlist } from './hooks/useWishlist';

export default function WishlistDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { items, isLoading } = useWishlist();

  if (isLoading) return <p>読み込み中...</p>;

  const item = items.find((i) => i.id === id);

  if (!item) {
    return (
      <div>
        <p>アイテムが見つかりませんでした。</p>
        <Link to="/wishlist">← 一覧に戻る</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{item.name}</h1>
      <p>ステータス: {item.bought ? '✅ 購入済み' : '🛒 未購入'}</p>
      <Link to="/wishlist">← 一覧に戻る</Link>
    </div>
  );
}