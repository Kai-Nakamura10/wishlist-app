// src/features/wishlist/pages/WishlistNewPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from './contexts/WishlistContext';

export default function WishlistNewPage() {
  const [name, setName] = useState('');
  const { handleAdd } = useWishlist();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === '') return;

    handleAdd(name.trim());
    navigate('/wishlist');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🆕 欲しいものを追加</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">名前：</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ marginLeft: '0.5rem' }}
          />
        </div>

        <button type="submit">追加する</button>
      </form>
    </div>
  );
}