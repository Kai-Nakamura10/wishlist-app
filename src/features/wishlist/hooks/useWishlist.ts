// src/features/wishlist/hooks/useWishlist.ts
import { useState, useEffect } from 'react';
import type { WishlistItem } from '../types';
import { mockWishlist } from '../mocks/task';

export const useWishlist = () => {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setItems(mockWishlist);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const handleToggle = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return { items, isLoading, handleToggle, handleDelete };
};
