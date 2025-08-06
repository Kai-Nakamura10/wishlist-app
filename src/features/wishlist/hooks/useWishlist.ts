import { useEffect, useState } from 'react';
import type { WishlistItem } from '../types';

export const useWishlist = () => {
    const [items, setItems] = useState<WishlistItem[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('wishlist');
        if (saved) setItems(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(items));
    }, [items]);

    const addItem = (name: string) => {
        const newItem: WishlistItem = {
            id: crypto.randomUUID(),
            name,
            bought: false,
        };
        setItems([...items, newItem]);
    };

    const deleteItem = (id: string) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const toggleItem = (id: string) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, bought: !item.bought } : item
            )
        );
    };

    return { items, addItem, deleteItem, toggleItem };
};