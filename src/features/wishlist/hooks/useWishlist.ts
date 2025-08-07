import { useEffect, useState } from 'react';
import type { WishlistItem } from '../types';
import { mockWishlist } from '../mocks/task.ts';

export const useWishlist = () => {
    const [items, setItems] = useState<WishlistItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timrout = setTimeout(() => {
            setItems(mockWishlist);
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timrout);
    }, []);

    return {items, isLoading};
};