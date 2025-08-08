import { createContext, useContext, useEffect, useState } from 'react';
import type { WishlistItem } from '../types';
import { mockWishlist } from '../mocks/task';

const STORAGE_KEY = 'wishlist';

type WishlistContextType = {
  items: WishlistItem[];
  isLoading: boolean;
  handleToggle: (id: string) => void;
  handleDelete: (id: string) => void;
  handleAdd: (name: string) => void;
  handleUpdate: (id: string, name: string) => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setItems(stored ? JSON.parse(stored) : mockWishlist);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isLoading]);

  const handleToggle = (id: string) => {
    setItems(prev =>
      prev.map(item => item.id === id ? { ...item, bought: !item.bought } : item)
    );
  };

  const handleDelete = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleAdd = (name: string) => {
    const newItem: WishlistItem = {
      id: crypto.randomUUID(),
      name,
      bought: false,
    };
    setItems(prev => [...prev, newItem]);
  };

  const handleUpdate = (id: string, name: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, name } : item
      )
    );
  };

  return (
    <WishlistContext.Provider value={{ items, isLoading, handleToggle, handleDelete, handleAdd, handleUpdate }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within a WishlistProvider');
  return ctx;
};