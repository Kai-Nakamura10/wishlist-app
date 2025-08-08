// src/features/wishlist/pages/WishlistEditPage.tsx
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useWishlist } from '../contexts/WishlistContext';

export default function WishlistEditPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { items, handleUpdate } = useWishlist();
  const [name, setName] = useState('');

  const item = items.find((item) => item.id === id);

  useEffect(() => {
    if (item) {
      setName(item.name);
    }
  }, [item]);

  const handleSave = () => {
    if (!item) return;
    handleUpdate(item.id, name); // ✅ Context の状態を更新
    navigate('/wishlist');
  };

  if (!item) return <p>アイテムが見つかりません。</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📝 欲しいものを編集</h1>
      <label>
        名前:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginLeft: '0.5rem' }}
        />
      </label>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleSave}>💾 保存</button>
        <button
          onClick={() => navigate('/wishlist')}
          style={{ marginLeft: '1rem' }}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
}