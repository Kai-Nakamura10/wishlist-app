import { useState } from 'react';
import { useWishlist } from './hooks/useWishlist';

export default function WishlistPage() {
    const [input, setInput] = useState('');
    const { items, addItem, deleteItem, toggleItem } = useWishlist();

    const handleAdd = () => {
        if (!input.trim()) return;
        addItem(input);
        setInput('');
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>🛒 欲しいものリスト</h1>

            <div>
                <input
                    type="text"
                    placeholder="例: Nintendo Switch"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleAdd}>追加</button>
            </div>

            <ul style={{ marginTop: '1rem' }}>
                {items.map((item) => (
                    <li key={item.id} style={{ marginBottom: '0.5rem' }}>
                        <input
                            type="checkbox"
                            checked={item.bought}
                            onChange={() => toggleItem(item.id)}
                        />
                        <span
                            style={{
                                marginLeft: '0.5rem',
                                textDecoration: item.bought ? 'line-through' : 'none',
                            }}
                        >
                            {item.name}
                        </span>
                        <button onClick={() => deleteItem(item.id)} style={{ marginLeft: '1rem' }}>
                            削除
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}